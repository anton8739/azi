module.exports =  (game_state) => {
    try {
        const publicState = {...game_state, players : game_state.players.map(player => {
                delete player.privateData;
                return player;
            })}
        return publicState
    } catch (err) {
        console.log(err)
        return null;
    }
}