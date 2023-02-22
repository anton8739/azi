const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const gameSleep = require("../gameSleep");
const passMove = require("../../passMove");
module.exports = async (roomId, userId, io) => {
    let game_state = await getGameState(roomId)
    // 1. проверит существет ли в массиве данный игрок / и активен ли он т.к.
    const player = game_state.players.find(player => player.user_id === userId)
    const isActive = player && !player.disabled;

    // 2. установит игроку waitforGameMove true,
    if (isActive) {
        game_state = {
            ...game_state, players: game_state.players.map(player => {
                if (player.user_id === userId) {
                    return {
                        ...player,
                        waitForGameMove: true,
                    }
                }
                return player;
            })
        }
        await setGameState(roomId, game_state, io)

        // 3. с задержками 2с(8 раз) проверит не поменялось ли waitForGameMove.
        let isWaiting = true;
        let waitCount = 10;
        while (waitCount > 0 && isWaiting) {
            await gameSleep(2000)
            game_state = await getGameState(roomId)
            isWaiting = game_state.players.find(player => player.user_id === userId)?.waitForGameMove;
            waitCount--;
            console.log(`Проверка положил ли игрок id=${userId} карту или нет`)
        }
        if (!isWaiting) {
            // 5 Если успел то переход к следующему игроку
            console.log(`Игрок id=${userId} положил карту`)
        } else {
            //Если игрок не успел походить то пас.
            game_state = await passMove(roomId, userId);
            await setGameState(roomId, game_state, io)
            console.log("Игрок не успел сделать ставку")
        }
    } else {
        console.log("Игрок не активный, пропуск")
    }
}