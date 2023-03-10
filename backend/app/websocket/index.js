const {Server} = require("socket.io");
const {CONNECTION, JOIN_ROOM, UPDATE_GAME_STATE, UPDATE_USER_PRIVATE,ROOM_CONNECTION_ERROR,MAKE_GAME_MOVE,LEAVE_ROOM,MAKE_MOVE} = require("./eventsTypes");
const {joinRoom,leaveRoom,makeMove,makeGameMove} = require('../service/index')
const db = require("../models");
const Room = db.rooms;
module.exports = server => {

    const io = new Server(server, {
        cors: {
            origin: '*',
        }
    });

    io.on(CONNECTION, (socket) => {

        let connectedUser = null;
        let connectedRoom = null;
        console.log('Пользователь подключелся к socket.io');
        /*join room event*/
        socket.on(JOIN_ROOM, async (roomId, userId) => {
            const roomData = await Room.findByPk(roomId)
            socket.join(`user${userId}`);
            const isRoomFull = roomData.game_state?.players?.length >= roomData.players_limit
            if (isRoomFull) {
                console.log("Ошибка подключения. Комната переполнена")
                const message = 'Ошибка подключения. Комната переполнена'
                io.to(`user${userId}`).emit(ROOM_CONNECTION_ERROR, message);
                socket.leave(`user${userId}`);
            } else {
                connectedUser=userId;
                connectedRoom=roomId;
                const roomTitle = `room${roomId}`
                socket.join(roomTitle);
                await joinRoom(roomId, userId,io)
                console.log(`Пользователь id =${userId} подключился к комнате id =${roomId}`);
            }
        });


        /*make move event*/
        socket.on(MAKE_MOVE, async (roomId, userId, pass, bid,currentBid ) => {
            await makeMove(roomId, userId,pass, bid,currentBid,io)
            console.log(`Пользователь id=${userId} сделал ход в комнате id = ${roomId}`);

        });
        /*makeGameMove move event*/
        socket.on(MAKE_GAME_MOVE, async (roomId, userId, card) => {
            console.log("+++++")
            await makeGameMove(roomId, userId,card,io)
            console.log(`Пользователь id=${userId} сделал ход в комнате id = ${roomId}`);

        });
        /*leave room event*/
        socket.on(LEAVE_ROOM, async (roomId,userId) => {
            const roomTitle = `room${roomId}`
            const {publicState} = await leaveRoom(roomId, userId,io)
            console.log(`User leaved room ${roomId}`);
            socket.leave(roomTitle);
            socket.leave(`user${userId}`);
            connectedUser = null;
            connectedRoom = null;
            io.to(roomTitle).emit(UPDATE_GAME_STATE, publicState);
        });


        /*disconnect event*/
        socket.on('disconnect', async () => {
            if (connectedUser && connectedRoom) {
                const roomTitle = `room${connectedRoom}`
                const {publicState} = await leaveRoom(connectedRoom, connectedUser,io)
                console.log(`User leaved room ${connectedRoom}`);
                socket.leave(roomTitle);
                socket.leave(`user${connectedUser}`);
                io.to(roomTitle).emit(UPDATE_GAME_STATE, publicState);
                connectedUser = null;
                connectedRoom = null;
            }
            console.log('Got disconnect!');
        });

    });

};