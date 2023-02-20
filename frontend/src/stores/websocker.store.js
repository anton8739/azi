import io from 'socket.io-client';
import {makeAutoObservable, runInAction} from "mobx";
import {UserApi} from "services";
import {notifier} from "utils/notifier";
import {rootStore} from "stores/index";
import {SOCKET_EVENTS} from "utils/constants";

const socket = io('http://localhost:8080');

export default class WebsocketStore {

    isConnected = false;
    gameState = {
        wait_for_players: true,
        game_start: false,
        players: [],
        user: {},
        bank: {}
    };

    constructor(rootStore) {
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore;
    }

    joinRoom = async (roomId, userId) => {
        socket.emit(SOCKET_EVENTS.JOIN_ROOM, roomId, userId)
    }
    leaveRoom = async (roomId, userId) => {
        socket.emit(SOCKET_EVENTS.LEAVE_ROOM, roomId, userId)
    }
    onUpdateGameState = async (gameState) => {
        console.log(gameState)
        runInAction(() => {
            gameState = {
                ...gameState,
                players: gameState.players.filter(player => player.user_id !== rootStore.authStore.user.id)
            }
            this.gameState = {...this.gameState, ...gameState}
        })
    }
    onUpdatePlayerState = async (playerState) => {
        runInAction(() => {
            this.gameState = {...this.gameState, user: {...playerState.privateData}}
        })
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