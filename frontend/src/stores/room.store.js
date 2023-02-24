/* eslint-disable max-len */
import {makeAutoObservable, runInAction} from 'mobx';
import {RoomApi, UserApi} from "services";
import {notifier} from "utils/notifier";
import {date} from "yup";
export const statusMap = {
    1: "Раунд",
    2: "Уровнял"
}
export default class RoomStore {

    rooms= [];
    currnetRoom = null;
    gameState = {
        players : [{
            user_id : 1,
            status: 1,
            player: {name: "Player1", balance: 3500},
            cardsAmount: 1,
            activeCard: {suit: 3, value: 8},
            loading: true,
            disabled: false,
        },
            {
                user_id : 2,
                status: 1,
                player: {name: "Player2", balance: 2500},
                cardsAmount: 3,
                activeCard: {suit: 3, value: 0},
                loading: false,
                disabled: null,
            },
            {
                user_id : 3,
                status: 1,
                player: {name: "Player3", balance: 2700},
                cardsAmount: 3,
                activeCard: {suit: 3, value: 1},
                loading: false,
                disabled: true,
            },
            {
                user_id : 4,
                status: 1,
                player: {name: "Player3", balance: 2700},
                cardsAmount: 3,
                activeCard: {suit: 3, value: 2},
                loading: false,
                disabled: false,
            },
            {
                user_id : 5,
                status: 2,
                player: {name: "Player3", balance: 2700},
                cardsAmount: 3,
                activeCard: {suit: 3, value: 3},
                loading: false,
                disabled: false,
            },
        ],
        user: {
            azi: false,
            move: {
                status : false,
                type: '',
            },
            dropCard: true,
            win: {
                status: false,
                score: 123,
                balance: 342,
            },
            error: {
                status: false,
                message: "Ошибка подключения к комнате"
            },
            cards: [{
                suit: 0,
                value: 6
            }, {
                suit: 1,
                value: 7
            }, {
                suit: 2,
                value: 8
            }]
        },
        bank: {
            trumpCard: {suit: 2, value: 2},
            balance: 2300
        }
    };

    constructor(rootStore) {
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore;
    }
    loadSingleRoom = async (id) => {
        const response = await RoomApi.loadSingleRoom(id);
        if (response.isError) {
            notifier({ description: response.shownMessage || response.message, type: 'error' });

        } else {
            runInAction(() => {
                this.currnetRoom = response.data
            })
        }
    }
    loadRooms = async () => {
        const response = await RoomApi.loadRooms();
        if (response.isError) {
            notifier({ description: response.shownMessage || response.message, type: 'error' });

        } else {
            runInAction(() => {
                this.rooms = response.data
            })
        }
    }
    createRoom = async (data) => {
        const response = await RoomApi.createRoom(data);
        if (response.isError) {
            notifier({ description: response.shownMessage || response.message, type: 'error' });
        } else {
            notifier({ description: "Игра успешно создана" , type: 'success' });
        }
    }
    checkRoomPassword = async (data) => {
        const response = await RoomApi.checkRoomPassword(data);
        if (response.isError) {
            notifier({ description: response.shownMessage || response.message, type: 'error' });
        } else {
            notifier({ description: response.data.message || "Успешно вошли в комнату" , type: 'success' });
            return true;
        }
    }

}
