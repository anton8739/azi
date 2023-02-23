const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const updateUserBalance = require("../../updateUserBalance");
const db = require("../../../models");
const User = db.users;
module.exports = async (roomId, io) => {
    let game_state = await getGameState(roomId)
    const activePlayers = game_state.players.filter(player => !player.disabled)
    let winners = [];
    // определение победителей.
    activePlayers.forEach(player => {
        if (winners.length < 1) {
            winners = [player];
        } else if (winners[0].bribe < player.bribe) {
            winners = [player];
        } else if (winners[0].bribe === player.bribe) {
            winners.push(player)
        }
    })
    const winPerPlayer = game_state.bank.balance / winners.length;
    console.log(winPerPlayer)
    // начисление каждому игроку выигрыша.
    for (const winner of winners) {
        const user = await User.findByPk(winner.user_id)
        const newUserBalance = user.balance + winPerPlayer;
        await updateUserBalance(user.id, newUserBalance, io)
    }
    // отобразить выигрыш игрока / очистка банка
    game_state = {
        ...game_state, bank: {trumpCard: null, balance: 0},players: game_state.players.map(player => {
            const isWinner = winners.find(winner => winner.user_id === player.user_id);
            if (isWinner) {
                return {
                    ...player,
                    balance: player.balance + winPerPlayer,
                    winner: {isWinner: true, amount: winPerPlayer}
                }
            } else {
                return player;
            }
        })
    }
    await setGameState(roomId, game_state, io)
    console.log("Определен победитель игры/ начислен выигрыш")
}