module.exports = (game_state) => {
    try {
        const privateStates = game_state.players.map(player => {
            return {privateData: player.privateData, user_id: player.user_id};
        })
        return privateStates
    } catch (err) {
        console.log(err)
        return null;
    }
}