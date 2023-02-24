const db = require("../models");
const User = db.users;
module.exports = async (userId, balance) => {
    try {
        await User.update({balance: balance}, {
            where: { id: userId }
        })
    } catch (err) {
        console.log(err)
        return null;
    }
}