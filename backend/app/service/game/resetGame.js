const getGameState = require("../getGameState");
const setGameState = require("../setGameState");
module.exports = async (roomId,io) => {
    let game_state = await getGameState(roomId)
    game_state = {...game_state,
        starting: false,
        game_start: false,
        currentBid: 0,
        deck: [],
        bank: {
            trumpCard: null,
            balance: 0
        },
        players: game_state.players.map(player => {
            return {
                ...player,
                status: 0,
                cardsAmount: 0,
                activeCard: null,
                bid: 0,
                bribe: null,
                waitForMove: false,
                waitForGameMove: false,
                winner: {
                    isWinner : false,
                    amount : null,
                },
                privateData: {
                    move: {
                        type: null,
                    },
                    cards: [],
                }
            }
        })
    }
    await setGameState(roomId,game_state,io)
}