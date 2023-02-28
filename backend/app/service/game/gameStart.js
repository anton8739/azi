const waitGameStart = require('./steps/waitGameStart')
const dealCards = require('./steps/dealCards')
const getGameState = require('../getGameState')
const setActivePlayers = require('./steps/setActivePlayers')
const makeBids = require('./steps/makeBids')
const formBank = require('./steps/formBank')
const playGame = require('./steps/playGame')
const gameSleep = require('./gameSleep')
const resetGame = require('./resetGame')
module.exports = async (roomId, io) => {
    const game_state = await getGameState(roomId);
    await gameSleep(2000)
    let players = game_state.players
    /*шаг старта игры при подключении достаточного кол-ва игроков*/
    let startGame = await waitGameStart(roomId, io)
    while (startGame) {
        try {
                /*шаги игры*/
                /*1-ый установка игроков которые учавствуют в игре*/
                await setActivePlayers(roomId, io)
                /*2-ой шаг раздачи карт*/
                await dealCards(roomId, io)
                /*3-ий шаг игроки делают ставки*/
                await makeBids(roomId, io)
                /*4-ый формирование банка*/
                await formBank(roomId, io)
                /*5-ый шаг игра */
                await playGame(roomId, io)
                /*7-ый сброс состояния игры*/
                await gameSleep(3000)
                await resetGame(roomId, io)
                /*8-ый шаг начало новой партии если достаточно игроков*/
                const game_state = await getGameState(roomId);
                startGame = game_state.players.length > 1;

        } catch (err) {
            console.log(err)
            return null;
        }
    }

}