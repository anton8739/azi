const getGameState = require("../getGameState");
const setGameState = require("../setGameState");
const { v4: uuidv4 } = require('uuid');
module.exports = async (roomId,io, uuid) => {
    let game_state = await getGameState(roomId)
    if (!uuid || uuid ===game_state.uuid) {
        let firstMoveId = game_state.firstMoveId;
        if (firstMoveId >=5) {
            firstMoveId = 0;
        } else {
            firstMoveId = firstMoveId +1;
        }
        game_state = {...game_state,
            uuid:uuidv4(),
            wait_for_players: game_state.players.length < 2,
            starting: false,
            game_start: game_state.players.length > 1,
            currentBid: 0,
            firstMoveId: firstMoveId,
            hideCards: true,
            firstCard: null,
            moveOrder: [],
            deck: [],
            bank: {
                trumpCard: null,
                balance: 0
            },
            players: game_state.players.map(player => {
                return {
                    ...player,
                    status: 0,
                    disabled: true,
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

}