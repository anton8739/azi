/* eslint-disable max-len */
import {makeAutoObservable, runInAction} from 'mobx';
import { UserApi} from "services";
import {notifier} from "utils/notifier";

export default class UserStore {

    users= [];

    constructor(rootStore) {
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore;
    }

    loadUsers = async () => {
        const response = await UserApi.loadUsers();
        if (response.isError) {
            notifier({ description: response.shownMessage || response.message, type: 'error' });

        } else {
            runInAction(() => {
                this.users = response.data
            })
        }
    }

}
