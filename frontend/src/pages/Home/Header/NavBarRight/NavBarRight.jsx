import React from 'react';
import {observer} from "mobx-react-lite";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import {useAuthStore} from "stores";
import {useHistory} from "react-router-dom";
import {RouteNames} from "utils/routes";
import PlusIcon from "components /common/Icon/PlusIcon";
import './NavBarRight.scss'
const NavBarRight = (props) => {
    const {logout, user} = useAuthStore();
    const history = useHistory();
    const handleLogout = async () => {
        await  logout()
        history.push(RouteNames.LOGIN)
    }
    return (
        <div className="navbar-right">
            <div className="balance-wp">
                <div className="balance-btn">
                    <PlusIcon fill='#FFFFFF'/>
                </div>
                <div className="balance">{user.balance}</div>
            </div>
            <ButtonPrimary onClick={handleLogout}>
                Выход
            </ButtonPrimary>
        </div>
    );
}

export default observer(NavBarRight);