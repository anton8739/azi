module.exports = (game_state) => {
    try {
        if (game_state.players.length < 2) {
            game_state = {
                ...game_state,
                wait_for_players: true,
                game_start: false,
                starting: false,
                deck: [],
                players: game_state.players.map(player => {
                    return {
                        ...player,
                        cardsAmount: 0,
                        privateData: {
                            ...player.privateData,
                            cards: []
                        }
                    }
                })
            }
        } else {
            game_state = {...game_state, wait_for_players: false}
        }

        return game_state
    } catch (err) {
        console.log(err)
        return null;
    }
}