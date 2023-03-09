const gameSleep = require('../gameSleep')
const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const singleBid = require("./singleBid")
module.exports = async (roomId,io) => {
    let lastMove = false;
    while (!lastMove) {
        let game_state = await getGameState(roomId)
        const activePlayers = game_state.players.filter(player => !player.disabled)
        const firstMoveId  = game_state.firstMoveId;
        /*ходы игроков чередуются покругу*/
        let moveOrder = activePlayers.map(player => player.user_id);
        if (activePlayers[firstMoveId]) {
            moveOrder = [...moveOrder.slice(firstMoveId), ...moveOrder.slice(0,firstMoveId)];
        } else if (activePlayers[firstMoveId-activePlayers.length]) {
            moveOrder = [...moveOrder.slice(firstMoveId-activePlayers.length), ...moveOrder.slice(0,firstMoveId-activePlayers.length)];
        } else if (activePlayers[firstMoveId-activePlayers.length*2]) {
            moveOrder = [...moveOrder.slice(firstMoveId-activePlayers.length*2), ...moveOrder.slice(0,firstMoveId-activePlayers.length*2)];
        }
        game_state = {...game_state, moveOrder: moveOrder}
        await setGameState(roomId, game_state, io)
        for (let i=0; i< moveOrder.length; i++) {
            await singleBid(roomId, moveOrder[i], io)
            game_state = await getGameState(roomId)
            const inGamePlayer = game_state.players.filter(player => !player.disabled)
            inGamePlayer.sort((a, b) => a.bid - b.bid)
            if (inGamePlayer.length <2 || (inGamePlayer[0]?.bid !== 0
                && inGamePlayer[0]?.bid === inGamePlayer[inGamePlayer.length-1]?.bid
            )) {
                lastMove = true;
                break;
            }
        }

    }
    let game_state = await getGameState(roomId)
    game_state = {...game_state, hideCards: false}
    await setGameState(roomId, game_state, io)
    console.log("Все игроки сделали ставку")
}