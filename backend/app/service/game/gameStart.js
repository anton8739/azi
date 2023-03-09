const waitGameStart = require('./steps/waitGameStart')
const dealCards = require('./steps/dealCards')
const getGameState = require('../getGameState')
const setActivePlayers = require('./steps/setActivePlayers')
const makeBids = require('./steps/makeBids')
const formBank = require('./steps/formBank')
const playGame = require('./steps/playGame')
const gameSleep = require('./gameSleep')
const resetGame = require('./resetGame')
const setGameUUID = require('./setGameUUID')
module.exports = async (roomId, io) => {
    await gameSleep(2000)
    /*шаг старта игры при подключении достаточного кол-ва игроков*/
    let startGame = await waitGameStart(roomId, io)
    while (startGame) {
        try {
            /*шаги игры*/
            /*сброс состояния игры на исходное*/
            await resetGame(roomId, io)
            /*установка gameUUID*/
            const uuid = await setGameUUID(roomId, io)
            /*1-ый установка игроков которые учавствуют в игре*/
            await setActivePlayers(roomId, io,uuid)
            /*2-ой шаг раздачи карт*/
            await dealCards(roomId, io,uuid)
            /*3-ий шаг игроки делают ставки в закрытую*/
            await makeBids(roomId, io,uuid)
            /*3.1-ый формирование банка из ставок в закрытую*/
            await formBank(roomId, io,uuid)
            /*4-ий шаг игроки делают ставки в открытую*/
            await makeBids(roomId, io,uuid)
            /*5-ый формирование банка*/
            await formBank(roomId, io,uuid)
            /*6-ый шаг игра */
            await playGame(roomId, io,uuid)
            /*7-ыЙ сброс состояния игры на исходное*/
            await gameSleep(2000)
            /*8-ый шаг начало новой партии если достаточно игроков*/
            const game_state = await getGameState(roomId);
            startGame = game_state.players.length > 1 && game_state.uuid === uuid;

        } catch (err) {
            console.log(err)
            return null;
        }
    }

}