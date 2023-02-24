const db = require("../models");
const User = db.users;
module.exports = async (userId, score) => {
    try {
        await User.update({score: score}, {
            where: { id: userId }
        })
    } catch (err) {
        console.log(err)
        return null;
    }
}