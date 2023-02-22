const gameSleep = require('../gameSleep')
const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const singleGameMove = require("./singleGameMove")
module.exports = async (roomId,io) => {
    for (let i = 0; i<3; i++) {
        let game_state = await getGameState(roomId)
        //1. игроки кладут карту
        const activePlayers = game_state.players.filter(player => !player.disabled)
        for (let i=0; i< activePlayers.length; i++) {
            await singleGameMove(roomId, activePlayers[i].user_id, io)
        }
        //2. опередление чья взятка на основании положенных карт
    }
    console.log("Игра окончена")
}