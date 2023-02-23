const getGameState = require('./getGameState')
module.exports = async (roomId, userId) => {
    try {
        let game_state = await getGameState(roomId)
        let leftPlayerBid = 0;
        game_state = {
            ...game_state,
            players: game_state.players.map(player => {
                if (player.user_id === userId) {
                    leftPlayerBid = player.bid
                    return {
                        ...player,
                        waitForMove: false,
                        waitForGameMove: false,
                        cardsAmount: 0,
                        activeCard: null,
                        disabled: true,
                        status: 0,
                        privateData: {
                            ...player.privateData, cards: [], move: {

                                type: null,
                            },
                        },
                    };
                } else {
                    return player;
                }

            })
        }
        game_state = {...game_state, bank: {balance: game_state.bank.balance + leftPlayerBid}}
        return  game_state;
    } catch (err) {
        console.log(err)
        return null;
    }


}