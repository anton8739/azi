const getGameState = require("../../getGameState");
const setGameState = require("../../setGameState");
const updateUserBalance = require("../../updateUserBalance");
const updateUserScore = require('../../updateUserScore')
const updateUserGames = require('../../updateUserGames')
const db = require("../../../models");
const User = db.users;
module.exports = async (roomId, io) => {
    let game_state = await getGameState(roomId)
    const activePlayers = game_state.players.filter(player => !player.disabled)
    if (activePlayers.length > 1) {
        let winners = [];
        // определение победителей.
        for (const player of activePlayers) {
            const user = await User.findByPk(player.user_id)
            await updateUserGames(user.dataValues.id, user.dataValues.games + 1, io)
            if (winners.length < 1) {
                winners = [player];
            } else if (winners[0].bribe < player.bribe) {
                winners = [player];
            } else if (winners[0].bribe === player.bribe) {
                winners.push(player)
            }
        }
        const winPerPlayer = game_state.bank.balance / winners.length;
        // начисление каждому игроку выигрыша.
        for (const winner of winners) {
            const user = await User.findByPk(winner.user_id)
            const newUserBalance = user.dataValues.balance + winPerPlayer;
            await updateUserBalance(user.dataValues.id, newUserBalance, io)
            await updateUserScore(user.dataValues.id, user.dataValues.score + 1, io)
        }
        // отобразить выигрыш игрока / очистка банка
        game_state = {
            ...game_state, bank: {trumpCard: null, balance: 0}, players: game_state.players.map(player => {
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
    } else {
        const lastActivePlayer = game_state.players.filter(player => !player.disabled)[0];
        if (lastActivePlayer) {
            const newUserBalance = lastActivePlayer.balance + game_state.bank.balance;
            lastActivePlayer && await updateUserBalance(lastActivePlayer.user_id, newUserBalance, io)
            game_state = {
                ...game_state, bank: {trumpCard: null, balance: 0}, players: game_state.players.map(player => {
                    if (!player.disabled) {
                        return {
                            ...player,
                            balance: newUserBalance,
                            winner: {isWinner: true, amount: game_state.bank.balance}
                        }
                    }
                    return player;

                })
            }
        }
    }

    await setGameState(roomId, game_state, io)
    console.log("Определен победитель игры/ начислен выигрыш")
}