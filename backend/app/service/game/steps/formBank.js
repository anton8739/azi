const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
module.exports = async (roomId,io) => {
    try {
        let game_state = await getGameState(roomId)
        let totalBids = 0;
        game_state.players.forEach(player => {
            totalBids = totalBids + player.bid
        })
        game_state = {...game_state,  bank: {...game_state.bank, balance: game_state.bank.balance + totalBids }}
        game_state = {
            ...game_state,
            players: [
                ...game_state.players.map(player => {
                    return {
                        ...player,
                        bid: 0,
                    }
                }),
            ]
        }
        await setGameState(roomId,game_state,io)
        console.log(`Банк сформирован = ${game_state.bank.balance}`)
    } catch (err) {
        console.log(err)
        return null;
    }

}