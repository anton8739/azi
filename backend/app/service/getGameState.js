const db = require("../models");
const Room = db.rooms;
module.exports = async (roomId) => {
    try {
        const roomData = await Room.findByPk(roomId)
        const game_state = roomData.dataValues.game_state;
        return game_state
    } catch (err) {
        console.log(err)
        return null;
    }
}