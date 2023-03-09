const getGameState = require('./getGameState')
module.exports = async (roomId, userId,uuid) => {
    try {
        let game_state = await getGameState(roomId)
        if (!uuid || uuid === game_state.uuid) {
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
                            bid:0,
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
            game_state = {...game_state, bank: {...game_state.bank, balance: game_state.bank.balance + leftPlayerBid}}
        }
        return  game_state;
    } catch (err) {
        console.log(err)
        return null;
    }


}