const waitGameStart = require('./steps/waitGameStart')
const dealCards = require('./steps/dealCards')
const getGameState = require('../getGameState')
const setActivePlayers = require('./steps/setActivePlayers')
const makeBids = require('./steps/makeBids')
module.exports = async (roomId,io) => {
    let game_state =  await getGameState(roomId);
    try {
        /*шаг старта игры при подключении достаточного кол-ва игроков*/
        const startGame = await waitGameStart(roomId,io)
        /*старт игры*/
        if (startGame) {
            /*шаги игры*/
            /*1-ый установка игроков которые учавствуют в игре*/
            await setActivePlayers(roomId,io)
            /*2-ой шаг раздачи карт*/
            await dealCards(roomId,io)
            /*3-ий шаг игроки делаю ставки*/
            await makeBids(roomId,io)
        }

    } catch (err) {
        console.log(err)
        return null;
    }
}