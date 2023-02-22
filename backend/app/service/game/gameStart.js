const waitGameStart = require('./steps/waitGameStart')
const dealCards = require('./steps/dealCards')
const getGameState = require('../getGameState')
const setActivePlayers = require('./steps/setActivePlayers')
const makeBids = require('./steps/makeBids')
const formBank = require('./steps/formBank')
const playGame= require('./steps/playGame')
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
            /*3-ий шаг игроки делают ставки*/
            await makeBids(roomId,io)
            /*4-ый формирование банка*/
            await formBank(roomId, io)
            /*5-ый шаг игра */
            await playGame(roomId, io)
            /*6-ый опеределение победителя на осовании взяток (5с отображение итогов игры) у всех игроков*/

            /*7-ый рестарт игры*/

        }

    } catch (err) {
        console.log(err)
        return null;
    }
}