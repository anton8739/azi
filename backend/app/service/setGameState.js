const db = require("../models");
const Room = db.rooms;
const getPublicState = require('./getPublicState')
const getPrivateGameStates = require('./getPrivateGameStates')
const {UPDATE_GAME_STATE, UPDATE_USER_PRIVATE} = require("../websocket/eventsTypes");
module.exports = async (roomId, game_state, io) => {
    try {

        await Room.update({game_state: game_state}, {
            where: { id: roomId }
        })
        const privateStates = getPrivateGameStates(game_state)
        const publicState = getPublicState(game_state)
        const roomTitle = `room${roomId}`
        io.to(roomTitle).emit(UPDATE_GAME_STATE, publicState);
        privateStates.forEach(data => {
            const userPrivateTitle = `user${data.user_id}`
            io.to(userPrivateTitle).emit(UPDATE_USER_PRIVATE, data);
        })
    } catch (err) {
        console.log(err)
        return null;
    }
}