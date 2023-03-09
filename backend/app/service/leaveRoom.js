const db = require("../models");
const getGameState = require('./getGameState')
const setGameState = require('./setGameState')
const getPublicState = require('./getPublicState')
const setWaitForPlayers = require("./setWaitForPlayers");
const resetGame = require("./game/resetGame");
const updateUserBalance = require("./updateUserBalance");
const updateRoomPlayersAmount = require("./updateRoomPlayersAmount");
module.exports = async (roomId,userId,io,uuid) => {
    try {
        let game_state = await getGameState(roomId);
        if (!uuid || uuid === game_state.uuid) {
            let restMoney = game_state.bank.balance;
            game_state.players.forEach(player => {
                restMoney = restMoney + player.bid;
            })
            game_state = {
                ...game_state,
                players: [...game_state.players.filter(player => player.user_id !== userId)]
            }
            game_state = setWaitForPlayers(game_state);

            await setGameState(roomId,game_state, io)
            if (game_state.players.length < 2) {
                game_state = {
                    ...game_state,
                    players: game_state.players.map(player => {
                        return {
                            ...player,
                            balance: player.balance + restMoney
                        }
                    })
                }
                if(game_state.players[0]) {
                    updateUserBalance(game_state.players[0].user_id, game_state.players[0].balance + restMoney, io)
                }
                await setGameState(roomId,game_state, io)
                await resetGame(roomId, io,uuid)
            } else  {
                await setGameState(roomId,game_state, io)
            }
            updateRoomPlayersAmount(roomId, game_state.players.length)
            game_state = await getGameState(roomId);
            const publicState = getPublicState(game_state)
            return {publicState};
        }

    } catch (err) {
        console.log(err)
        return null;
    }
}