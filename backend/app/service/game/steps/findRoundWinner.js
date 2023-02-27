const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
module.exports = async (roomId,io) => {
    let game_state = await getGameState(roomId)

    const activePlayers = game_state.players.filter(player => !player.disabled)
    //1. массив карт сыгранных игроками в порядке очереди.
    const cardsArray = [];
    game_state.moveOrder.forEach(id => {
        const currentPlayer = activePlayers.find(player => player.user_id === id)
        cardsArray.push({user_id: currentPlayer.user_id, card: currentPlayer.activeCard})
    })
    //2. Определение победителя/ начисление взяти
    let winCard = cardsArray[0];
    const trumpCard = game_state.bank.trumpCard;
    for (let i=1; i<cardsArray.length; i++) {
        const currentCard = cardsArray[i];
        //карты одной масти и текущая карта старше
        if (currentCard.card.suit === winCard.card.suit && currentCard.card.value > winCard.card.value){
            winCard = currentCard;
        }
        //текущая карта козырная а предыдущая нет
        if (currentCard.card.suit === trumpCard.suit && winCard.card.suit !== trumpCard.suit){
            winCard = currentCard;
        }
    }
    game_state = {...game_state, players: game_state.players.map(player => {
        if (player.user_id === winCard.user_id) {
            return {...player,
                bribe: player.bribe ? player.bribe + 1 : 1,
                activeCard : null,
            };
        } else {
            return {...player,
                activeCard : null,
            };
        }
        })}
    //3. Создание нового порядка хода
    if (winCard) {
        const firstPlayer = winCard.user_id
        const activePlayersIds = activePlayers.map(player => player.user_id)
        const firstPlayerIndex = activePlayersIds.findIndex(el => el === firstPlayer);
        const newMoveOrder = [...activePlayersIds.slice(firstPlayerIndex), ...activePlayersIds.slice(0,firstPlayerIndex)];
        game_state = {...game_state, moveOrder: newMoveOrder}
    }
    await setGameState(roomId, game_state, io)
    console.log("Определен победитель раунда / установлен новый порядок")
}