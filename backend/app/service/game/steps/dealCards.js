const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const cardArray = require("../cardArray")
module.exports = async (roomId, io) => {
    const getSuites = (suites) => {
        const result = [];
        const arr = suites;
        let rand1 = Math.floor(Math.random() * arr.length);
        result.push(arr[rand1])
        arr.splice(rand1, 1)
        let rand2 = Math.floor(Math.random() * arr.length);
        result.push(arr[rand2])
        arr.splice(rand2, 1)
        let rand3 = Math.floor(Math.random() * arr.length);
        result.push(arr[rand3])
        return result;
    }
    const getDeckOfCards = (selectedSuites) => {
        return cardArray.filter(card => selectedSuites.includes(card.suit)
        )
    }
    const shuffleDeck = (deck) => {
        let currentIndex = deck.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        }

        return deck;
    }
    const suites = [0, 1, 2, 3]
    const selectedSuites = getSuites(suites);
    const shuffledDeck = shuffleDeck(getDeckOfCards(selectedSuites));
    try {
        let game_state = await getGameState(roomId)
        let cardCount = 0;
        game_state = {
            ...game_state,
            players: [
                ...game_state.players.map(player => {
                    if (!player.disabled) {
                        const updatedPayer = {
                            ...player,
                            cardsAmount: 3,
                            privateData: {
                                ...player.privateData,
                                cards: [shuffledDeck[cardCount], shuffledDeck[cardCount + 1], shuffledDeck[cardCount + 2]]
                            }
                        }
                        cardCount = cardCount + 3;
                        return updatedPayer;
                    } else {
                        return player;
                    }
                }),
            ],
            bank: {...game_state.bank, trumpCard: shuffledDeck[cardCount]}
        }
        cardCount=cardCount+1;
        game_state = {...game_state, deck: shuffledDeck.splice(cardCount, shuffledDeck.length - cardCount)}
        await setGameState(roomId, game_state, io)
    } catch (err) {
        console.log(err)
        return null;
    }

}