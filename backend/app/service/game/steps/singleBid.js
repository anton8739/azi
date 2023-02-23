const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const gameSleep = require("../gameSleep")
const passMove = require('../../passMove')
module.exports = async (roomId, userId, io) => {
    let game_state = await getGameState(roomId)
    // 1. проверит существет ли в массиве данный игрок / и активен ли он т.к.
    const player = game_state.players.find(player => player.user_id === userId)
    const isActive = player && !player.disabled;

    // 2. установит игроку waitforTurn true, type: first или next. (сделана ли какая-то ставка)
    if (isActive) {
        let isFirstBid = true;
        game_state.players.forEach(player => {
            if (player.bid > 0) {
                isFirstBid = false;
            }
        })
        game_state = {
            ...game_state, players: game_state.players.map(player => {
                if (player.user_id === userId) {
                    return {
                        ...player,
                        waitForMove: true,
                        privateData: {
                            ...player.privateData,
                            move: {
                                type: isFirstBid ? "first" : "next"
                            }
                        }
                    }
                }
                return player;
            })
        }
        await setGameState(roomId, game_state, io)

        // 3. с задержками 2с(8 раз) проверит не поменялось ли waitforTurn.
        let isWaiting = true;
        let waitCount = 10;
        while (waitCount > 0 && isWaiting) {
            await gameSleep(2000)
            game_state = await getGameState(roomId)
            isWaiting = game_state.players.find(player => player.user_id === userId)?.waitForMove;
            waitCount--;
            console.log(`Проверка походил ли игрок id=${userId} или нет`)
        }
        if (!isWaiting) {
            // 5 Если успел то переход к следующему игроку
            console.log(`Игрок id=${userId} сделал ставку`)
        } else {
            //Если игрок не успел походить то пас.
            game_state = await passMove(roomId, userId);
            console.log(game_state)
            await setGameState(roomId, game_state, io)
            console.log("Игрок не успел сделать ставку")
        }
    } else {
        console.log("Игрок не активный, пропуск")
    }
}