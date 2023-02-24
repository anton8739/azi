const db = require("../models");
const User = db.users;
module.exports = async (userId, games) => {
    try {
        await User.update({games: games}, {
            where: { id: userId }
        })
    } catch (err) {
        console.log(err)
        return null;
    }
}