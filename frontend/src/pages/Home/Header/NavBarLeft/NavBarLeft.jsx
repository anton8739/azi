import React from 'react';
import {observer} from "mobx-react-lite";
import {Avatar} from "antd";
import {useAuthStore} from "stores";
import './NavBarLeft.scss'
import icon from 'asserts/images/default-icon.png'
const NavBarLeft = (props) => {
    const {user} = useAuthStore();
    return (
        <div className="navbar-left">
            <Avatar size={40} icon={<img src={icon}/>} />
            <div className="username">{user.username}</div>
        </div>
    );
}

export default observer(NavBarLeft);