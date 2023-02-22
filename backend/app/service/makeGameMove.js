const db = require("../models");
const getGameState = require('./getGameState')
const setGameState = require('./setGameState')
const passMove = require('./passMove')
const updateUserBalance = require('./updateUserBalance')
const User = db.users;
module.exports = async (roomId, userId, card, io) => {
    try {
        let game_state = await getGameState(roomId)
        game_state = {
            ...game_state,
            players: game_state.players.map(player => {
                if (player.user_id === userId) {
                    return {
                        ...player,
                        cardsAmount: player.cardsAmount - 1,
                        activeCard: card,
                        waitForGameMove: false,
                        privateData: {
                            ...player.privateData,
                            cards: player.privateData.cards.filter(item => item.suit !== card.suit || item.value !== card.value)
                        }
                    };
                } else {
                    return player;
                }

            })
        }

        await setGameState(roomId, game_state, io)
    } catch (err) {
        console.log(err)
        return null;
    }


}