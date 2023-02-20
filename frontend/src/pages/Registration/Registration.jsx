import React from 'react';
import logo from "asserts/images/azi.png";
import {useHistory} from "react-router-dom";
import {RouteNames} from "utils/routes";
import RegistrationForm from "pages/Registration/RegistrationForm/RegistrationForm";
import './Registration.scss'
import {observer} from "mobx-react-lite";
import bg from "asserts/images/main_bg.png";
const Registration = () => {
    const history = useHistory();
    const goToLogin = () => {
        history.push(RouteNames.LOGIN)
    }
    return (
        <div className='registration-wrapper' style={{backgroundImage: `url(${bg})` }} >
            <div className='registration-container'>
                <div className='registration-form-layout'>
                    <div className='title'>АЗИ онлайн</div>
                    <img className="sidebar-bg" src={logo} alt="logo"/>
                    <div className='subtitle'>Регистрация</div>
                    <RegistrationForm/>
                    <div className="to-login">
                        <div className="login" onClick={goToLogin}>Войти в игру</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(Registration);