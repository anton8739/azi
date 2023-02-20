const db = require("../models");
const getGameState = require('./getGameState')
const setGameState = require('./setGameState')
const getPublicState = require('./getPublicState')
const setWaitForPlayers = require("./setWaitForPlayers");
module.exports = async (roomId,userId) => {
    try {
        let game_state = await getGameState(roomId);
        game_state = {
            ...game_state,
            players: [...game_state.players.filter(player => player.user_id !== userId)]
        }
        game_state = setWaitForPlayers(game_state);
        await setGameState(roomId,game_state)
        const publicState = getPublicState(game_state)
        return {publicState};
    } catch (err) {
        console.log(err)
        return null;
    }



}