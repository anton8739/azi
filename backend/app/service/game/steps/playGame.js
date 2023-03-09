const gameSleep = require('../gameSleep')
const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const singleGameMove = require("./singleGameMove")
const findRoundWinner= require("./findRoundWinner")
const findGameWinner= require('./findGameWinner')
module.exports = async (roomId,io,uuid) => {
    let game_state = await getGameState(roomId)
    if (uuid === game_state.uuid) {
        let activePlayers = game_state.players.filter(player => !player.disabled)

        if (activePlayers.length > 1) {
            game_state = {...game_state, players : game_state.players.map(player => {
                    return {
                        ...player,
                        status: 0,
                    }
                })}
            await setGameState(roomId, game_state, io)
            for (let i = 0; i<3; i++) {
                let game_state = await getGameState(roomId)
                if (uuid === game_state.uuid) {
                    activePlayers = game_state.players.filter(player => !player.disabled)
                    game_state={...game_state, firstCard: null}
                    //1. игроки кладут карту
                    if (activePlayers.length > 1) {
                        for (let i = 0; i < game_state.moveOrder.length; i++) {
                            game_state = await getGameState(roomId)
                            if (uuid === game_state.uuid) {
                                activePlayers = game_state.players.filter(player => !player.disabled)
                                if (activePlayers.length > 1) {
                                    await singleGameMove(roomId, game_state.moveOrder[i], io,uuid)
                                }
                            }
                        }
                        //2. опередление чья взятка на основании положенных карт
                        if (activePlayers.length > 1) {
                            await findRoundWinner(roomId, io,uuid)
                        }
                    }
                }

            }

        }
        //3. определение победителя / начисленее выигрыша / отображение выигрыша на ui
        await findGameWinner(roomId, io,uuid)
    }
    console.log("Игра окончена")
}