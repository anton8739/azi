const gameSleep = require('../gameSleep')
const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
module.exports = async (roomId,io) => {
    let game_state = await getGameState(roomId)
    if (game_state.players.length > 1 && !game_state.starting) {
        game_state = {...game_state, starting: true}
        await setGameState(roomId,game_state,io)
        await gameSleep(5000)
        try {
            let game_state = await getGameState(roomId)
            if (game_state.players.length > 1) {
                game_state = {...game_state, game_start : true}
            }
            await setGameState(roomId,game_state,io)
            return true;
        } catch (err) {
            console.log(err)
            return null;
        }
    } else {
        return false;
    }

}