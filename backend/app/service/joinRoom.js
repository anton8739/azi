const db = require("../models");
const getGameState = require('./getGameState')
const setGameState = require('./setGameState')
const getPrivateGameStates = require('./getPrivateGameStates')
const getPublicState = require('./getPublicState')
const setWaitForPlayers = require('./setWaitForPlayers')
const gameStart = require("./game/gameStart");
const User = db.users;
module.exports = async (roomId,userId,io) => {
    try {
        const userData = User.findByPk(userId)
        const gameStateData = getGameState(roomId)
        const values = await Promise.all([userData, gameStateData])
        const user = values[0].dataValues;
        let game_state = values[1];
        game_state = {
            ...game_state,
            players: [
                ...game_state.players.filter(player => player.user_id !== userId),
                {
                    user_id : user.id,
                    status: 0,
                    name: user.username,
                    balance: user.balance,
                    cardsAmount: 0,
                    activeCard: null,
                    bid: 0,
                    bribe: null,
                    waitForMove: false,
                    waitForGameMove: false,
                    disabled: true,
                    winner: {
                        isWinner : false,
                        amount : null,
                    },
                    privateData: {
                        move: {
                            type: null, // first | next
                        },
                        cards: [],
                    }
                }
            ]
        }
        game_state = setWaitForPlayers(game_state);
        await setGameState(roomId,game_state,io)
        gameStart(roomId,io);
    } catch (err) {
        console.log(err)
        return null;
    }



}