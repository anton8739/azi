const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
module.exports = async (roomId,io,uuid) => {
    try {
        let game_state = await getGameState(roomId)
        if (uuid ===game_state.uuid) {
            game_state = {
                ...game_state,
                players: [
                    ...game_state.players.map(player => {
                        return {
                            ...player,
                            disabled: false,
                        }
                    }),
                ]
            }
            await setGameState(roomId,game_state,io)
        }
    } catch (err) {
        console.log(err)
        return null;
    }

}