import React from 'react';
import AuthStore from "stores/auth.store";
import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import UserStore from "stores/user.store";
import RoomStore from "stores/room.store";
import WebsocketStore from "stores/websocker.store";




class RootStore {
  constructor() {
    this.router = routingStore;
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.roomStore = new RoomStore(this);
    this.websocketStore = new WebsocketStore(this)
  }
}
export const history = createBrowserHistory();

export const routingStore = new RouterStore();

export const browserHistory = syncHistoryWithStore(history, routingStore);
export const rootStore = new RootStore();
export const StoresContext = React.createContext(rootStore);

export const useStores = () => React.useContext(StoresContext);

export const useAuthStore = () => {
  const { authStore } = useStores();
  return authStore;
};
export const useUserStore = () => {
  const { userStore } = useStores();
  return userStore;
};
export const useRoomStore = () => {
  const { roomStore } = useStores();
  return roomStore;
};
export const useWebsocketStore = () => {
  const { websocketStore } = useStores();
  return websocketStore;
};

