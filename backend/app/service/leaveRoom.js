const db = require("../models");
const getGameState = require('./getGameState')
const setGameState = require('./setGameState')
const getPublicState = require('./getPublicState')
const setWaitForPlayers = require("./setWaitForPlayers");
const resetGame = require("./game/resetGame");
module.exports = async (roomId,userId,io) => {
    try {
        let game_state = await getGameState(roomId);
        game_state = {
            ...game_state,
            players: [...game_state.players.filter(player => player.user_id !== userId)]
        }
        game_state = setWaitForPlayers(game_state);
        if (game_state.players.length < 2) {
            await resetGame(roomId, io)
        } else {
            await setGameState(roomId,game_state, io)
        }
        const publicState = getPublicState(game_state)
        return {publicState};
    } catch (err) {
        console.log(err)
        return null;
    }



}