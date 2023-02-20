import BaseApi from 'services/baseApi';
class UserApi {
    client;
    constructor(client) {
        this.client = client;
    }

    loadUsers = async () => {
        const url = "api/users"
        return await BaseApi.get(url);
    }
    setMute = async (data) => {
        console.log(data)
        const url = "api/users/mute"
        return await BaseApi.put(url, data);
    }
}
export default new UserApi(BaseApi);