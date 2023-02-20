/* eslint-disable max-len */
import {makeAutoObservable, runInAction} from 'mobx';
import {AuthApi, UserApi} from "services";
import {notifier} from "utils/notifier";
import {RouteNames} from "utils/routes";

export default class AuthStore {

  isAuth = false;
  isAdmin = false;
  isClient = false;
  isChecking= true;
  token = null;
  user = {}
  constructor(rootStore) {
    makeAutoObservable(this, {rootStore: false});
    this.rootStore = rootStore;
  }

  login = async (data) => {
    const response = await AuthApi.login(data)
    if (response.isError) {
      notifier({ description: response.shownMessage || response.message, type: 'error' });
    } else {
      runInAction(() => {
        this.token = response.data.accessToken
        this.isAuth = true;
        if (response.data.roleId === 1) {
          this.isClient = true;
        }
        if (response.data.roleId === 2) {
          this.isAdmin = true;
        }
        this.user = response.data
        localStorage.setItem('token', response.data.accessToken)
        localStorage.setItem('isAuth', "true")
      })
    }
  };
  registr = async (data) => {
    const response = await AuthApi.registr(data)
    if (response.isError) {
      notifier({ description: response.shownMessage || response.message, type: 'error' });
      return false;
    } else {
      notifier({ description: response.data.message || response.message, type: 'success' });
      return true;
    }
  }
  checkAuth = async () => {
    this.isChecking = true;
    if (localStorage.getItem('isAuth') && localStorage.getItem('token')) {
      const response =  await AuthApi.checkAuth()
      if (response.isError) {
        await this.logout();
        this.isChecking = false;
        return false;
      } else {
        this.user = response.data;

        runInAction(() => {
          if (response.data.roleId === 1) {
            this.isClient = true;
          }
          if (response.data.roleId === 2) {
            this.isAdmin = true;
          }
          this.isAuth = localStorage.getItem('isAuth');
          this.token = localStorage.getItem('token')
        })
        this.isChecking = false;
        return true;
      }
    } else  {
      this.isChecking = false;
      return false;
    }


  }
  logout = () => {
    localStorage.removeItem('isAuth')
    localStorage.removeItem('token')
    runInAction(() => {
      this.token = null;
      this.isAuth = false;
      this.isClient=false;
      this.isAdmin=false;
    })
  }
  setMute = async (value) => {
    const response = await UserApi.setMute({id: this.user.id, mute: value})
    if (response.isError) {
      notifier({ description: response.shownMessage || response.message, type: 'error' });
      return false;
    } else {
      runInAction(() => {
        this.user.mute = value;
      })
      return true;
    }
  }
}
