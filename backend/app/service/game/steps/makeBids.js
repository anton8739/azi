const gameSleep = require('../gameSleep')
const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const singleBid = require("./singleBid")
module.exports = async (roomId,io) => {
    let lastMove = false;
    while (!lastMove) {
        let game_state = await getGameState(roomId)
        const activePlayers = game_state.players.filter(player => !player.disabled)
        for (let i=0; i< activePlayers.length; i++) {
            await singleBid(roomId, activePlayers[i].user_id, io)
        }
        game_state = await getGameState(roomId)
        const inGamePlayer = game_state.players.filter(player => !player.disabled)
        inGamePlayer.sort((a, b) => a - b)
        console.log(inGamePlayer[0])
        console.log(inGamePlayer[inGamePlayer.length-1])

        if (inGamePlayer[0]?.bid === inGamePlayer[inGamePlayer.length-1]?.bid) {
            lastMove = true;
        }
    }
    console.log("Все игроки сделали ставку")
}