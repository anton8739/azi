const gameSleep = require('../gameSleep')
const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const singleGameMove = require("./singleGameMove")
const findFoundWinner= require("./findRoundWinner")
const findGameWinner= require('./findGameWinner')
module.exports = async (roomId,io) => {
    let game_state = await getGameState(roomId)
    const activePlayers = game_state.players.filter(player => !player.disabled)
    if (activePlayers.length > 1) {
        game_state = {...game_state, moveOrder: [...activePlayers.map(player => player.user_id)], players : game_state.players.map(player => {
                return {
                    ...player,
                    status: 0,
                }
            })}
        await setGameState(roomId, game_state, io)
        for (let i = 0; i<3; i++) {
            let game_state = await getGameState(roomId)
            //1. игроки кладут карту
            for (let i=0; i< game_state.moveOrder.length; i++) {
                await singleGameMove(roomId, game_state.moveOrder[i], io)
            }
            //2. опередление чья взятка на основании положенных карт
            await findFoundWinner(roomId, io)
        }

    }
    //3. определение победителя / начисленее выигрыша / отображение выигрыша на ui
    await findGameWinner(roomId, io)

    console.log("Игра окончена")
}