import BaseApi from 'services/baseApi';
class RoomApi {
    client;
    constructor(client) {
        this.client = client;
    }

    loadRooms = async (locked) => {
        const url = `api/rooms?locked=${locked}`
        return await BaseApi.get(url);
    }
    loadSingleRoom = async (id) => {
        const url = `api/rooms/${id}`
        return await BaseApi.get(url);
    }
    createRoom = async (data) => {
        const url = "api/rooms"
        return await BaseApi.post(url, data);
    }
    checkRoomPassword = async (data) => {
        const url = "api/rooms/auth"
        return await BaseApi.post(url, data);
    }
}
export default new RoomApi(BaseApi);