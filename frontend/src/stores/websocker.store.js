import io from 'socket.io-client';
import {makeAutoObservable, runInAction} from "mobx";
import {rootStore} from "stores/index";
import {SOCKET_EVENTS} from "utils/constants";
import {notifier} from "utils/notifier";
import {RouteNames} from "utils/routes";

const socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:8080');

export default class WebsocketStore {

    isConnected = false;
    gameState = {
        wait_for_players: true,
        game_start: false,
        players: [],
        user: {},
        bank: {}
    };
    userBid= null;
    userBribe= null;
    waitForMove=false;
    waitForGameMove=false;
    activeCard = null;
    currentBalance = 0;
    currentWinner = null;

    constructor(rootStore) {
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore;
    }

    joinRoom = async (roomId, userId) => {
        socket.emit(SOCKET_EVENTS.JOIN_ROOM, roomId, userId)
    }
    makeMove = async (roomId, userId, pass, bid,currentBid) => {
        socket.emit(SOCKET_EVENTS.MAKE_MOVE, roomId, userId, pass, bid,currentBid)
    }
    makeGameMove = async (roomId, userId,card) => {
        socket.emit(SOCKET_EVENTS.MAKE_GAME_MOVE, roomId, userId, card)
    }
    leaveRoom = async (roomId, userId) => {
        socket.emit(SOCKET_EVENTS.LEAVE_ROOM, roomId, userId)
    }
    onUpdateGameState = async (gameState) => {
        console.log(gameState)
        runInAction(() => {
            const currentUser = gameState.players.find(player => player.user_id === rootStore.authStore.user.id)
            this.userBid = currentUser?.bid;
            this.userBribe = currentUser?.bribe;
            this.activeCard = currentUser?.activeCard;
            this.waitForMove = currentUser?.waitForMove;
            this.waitForGameMove = currentUser?.waitForGameMove;
            this.currentBalance = currentUser?.balance;
            this.currentWinner= currentUser?.winner;
            gameState = {
                ...gameState,
                players: gameState.players.filter(player => player.user_id !== rootStore.authStore.user.id)
            }
            this.gameState = {...this.gameState, ...gameState}

        })
    }
    onUpdatePlayerState = async (playerState) => {
        console.log(playerState)
        runInAction(() => {
            this.gameState = {...this.gameState, user: {...playerState.privateData}}
        })
    }
    onRoomConnectionError = async  (message) => {
        notifier({ description: message, type: 'error' });
    }
}
socket.on(SOCKET_EVENTS.CONNECT, () => {
    console.log("Socket connected")
    runInAction(() => {
        rootStore.websocketStore.isConnected = true
    })
});
socket.on(SOCKET_EVENTS.UPDATE_GAME_STATE, (gameState) => {
    console.log("Socket game state updated")
    rootStore.websocketStore.onUpdateGameState(gameState)
});
socket.on(SOCKET_EVENTS.UPDATE_USER_PRIVATE, (playerState) => {
    console.log("Socket game state updated")
    rootStore.websocketStore.onUpdatePlayerState(playerState)
});
socket.on(SOCKET_EVENTS.ROOM_CONNECTION_ERROR, (message) => {
    console.log("Socket game state updated")
    rootStore.websocketStore.onRoomConnectionError(message)
});