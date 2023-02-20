const {Server} = require("socket.io");
const {CONNECTION, JOIN_ROOM, UPDATE_GAME_STATE, UPDATE_USER_PRIVATE,LEAVE_ROOM} = require("./eventsTypes");
const {joinRoom,leaveRoom} = require('../service/index')
module.exports = server => {

    const io = new Server(server, {
        cors: {
            origin: '*',
        }
    });

    io.on(CONNECTION, (socket) => {

        let connectedUser = null;
        let connectedRoom = null;
        console.log('User connected');
        /*join room event*/
        socket.on(JOIN_ROOM, async (roomId, userId) => {
            connectedUser=userId;
            connectedRoom=roomId;
            const roomTitle = `room${roomId}`
            socket.join(`user${userId}`);
            socket.join(roomTitle);
            await joinRoom(roomId, userId,io)
            console.log(`User joined room ${roomId}`);

        });


        /*leave room event*/
        socket.on(LEAVE_ROOM, async (roomId,userId) => {
            const roomTitle = `room${roomId}`
            const {publicState} = await leaveRoom(roomId, userId)
            console.log(`User leaved room ${roomId}`);
            io.to(roomTitle).emit(UPDATE_GAME_STATE, publicState);
        });


        /*disconnect event*/
        socket.on('disconnect', async () => {
            console.log(connectedUser)
            console.log(connectedRoom)
            if (connectedUser && connectedRoom) {
                const roomTitle = `room${connectedRoom}`
                const {publicState} = await leaveRoom(connectedRoom, connectedUser)
                console.log(`User leaved room ${connectedRoom}`);
                io.to(roomTitle).emit(UPDATE_GAME_STATE, publicState);
                connectedUser = null;
                connectedRoom = null;
            }
            console.log('Got disconnect!');
        });

    });

};