import BaseApi from 'services/baseApi';
class AuthApi {
    client;
    constructor(client) {
        this.client = client;
    }

    login = async (data) => {
        const url = "api/auth/signin"
        return await BaseApi.post(url, data);
    }
    registr = async (data) => {
        console.log(data)
        const url = "api/auth/signup"
        return await BaseApi.post(url, data);
    }
    checkAuth = async (data) => {
        const url = "api/auth/check"
        return await BaseApi.post(url, data);
    }

}
export default new AuthApi(BaseApi);