const db = require("../models");
const User = db.users;
const {UPDATE_USER} = require("../websocket/eventsTypes");
module.exports = async (userId, balance, io) => {
    try {
        await User.update({balance: balance}, {
            where: { id: userId }
        })
        const user = await User.findByPk(userId);
        io.to(`user${userId}`).emit(UPDATE_USER, user);
    } catch (err) {
        console.log(err)
        return null;
    }
}