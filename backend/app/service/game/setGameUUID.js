const getGameState = require("../getGameState");
const setGameState = require("../setGameState");
const { v4: uuidv4 } = require('uuid');
module.exports = async (roomId,io) => {
    let game_state = await getGameState(roomId)
    game_state = {...game_state, uuid: uuidv4()}
    await setGameState(roomId,game_state,io);
    return game_state.uuid
}