export const LOGIN_FIELDS = {
    EMAIL: 'email',
    PASSWORD: 'password',
};
export const REGISTRATION_FIELDS = {
    EMAIL: 'email',
    USERNAME: 'username',
    PASSWORD: 'password',
};
export const ROOM_FIELDS = {
    NAME: 'name',
    BID: 'bid',
    PASSWORD: 'password',
    LOCKED: 'locked',
    PLAYERS_LIMIT: 'players_limit',
};
export const CHECK_ROOM_PASSWORD_FIELDS = {
    PASSWORD: 'password',
};

export const SOCKET_EVENTS = {
    CONNECT : 'connect',
    JOIN_ROOM: 'joinRoom',
    UPDATE_GAME_STATE: 'updateGameState',
    UPDATE_USER_PRIVATE: 'updateUserPrivate',
    LEAVE_ROOM: 'leaveRoom',
    MAKE_MOVE: 'makeMove',
    UPDATE_USER: 'updateUser',
    MAKE_GAME_MOVE: 'makeGameMove',
}