const db = require("../models");
const Room = db.rooms;
module.exports = async (roomId, connected_players) => {
    try {
        await Room.update({connected_players: connected_players}, {
            where: { id: roomId }
        })
    } catch (err) {
        console.log(err)
        return null;
    }
}