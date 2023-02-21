const joinRoom = require("./joinRoom");
const leaveRoom = require("./leaveRoom");
const getGameState = require("./getGameState");
const setGameState = require("./setGameState");
const getPublicState = require("./getPublicState");
const getPrivateGameStates = require("./getPrivateGameStates");
const setWaitForPlayers = require("./setWaitForPlayers")
const gameStart = require("./game/gameStart")
const gameSleep = require("./game/gameSleep")
const makeMove= require("./makeMove")
module.exports = {
    joinRoom,
    leaveRoom,
    getGameState,
    setGameState,
    getPublicState,
    getPrivateGameStates,
    setWaitForPlayers,
    gameStart,
    gameSleep,
    makeMove
};