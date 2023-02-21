const db = require("../models");
const getGameState = require('./getGameState')
const setGameState = require('./setGameState')
const passMove = require('./passMove')
const updateUserBalance=require('./updateUserBalance')
const User = db.users;
module.exports = async (roomId, userId, pass, bid,currentBid, io) => {
    try {
        const userData = User.findByPk(userId)
        const gameStateData = getGameState(roomId)
        const values = await Promise.all([userData, gameStateData])
        let game_state = values[1];
        const user = values[0];
        if (pass) {
            game_state= await passMove(roomId, userId)
        } else {
            // обновить баланс юзера минус bid
            const newUserBalance = user.balance - bid;
            await updateUserBalance(userId,newUserBalance, io)
            // обновить state user/ waitMove: false  и bid: +bid
            game_state = {
                ...game_state,
                currentBid: currentBid,
                players: game_state.players.map(player => {
                    if (player.user_id === userId) {
                        return {
                            ...player,
                            bid: player.bid + bid,
                            waitForMove: false,
                        };
                    } else {
                        return player;
                    }

                })
            }
        }

        await setGameState(roomId, game_state, io)
    } catch (err) {
        console.log(err)
        return null;
    }


}