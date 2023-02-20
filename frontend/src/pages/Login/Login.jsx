import React from 'react';
import './Login.scss'
import logo from 'asserts/images/azi.png'
import {useHistory} from "react-router-dom";
import {publicRoutes, RouteNames} from "utils/routes";
import LoginForm from "pages/Login/LoginForm/LoginForm";
import {observer} from "mobx-react-lite";
import bg from 'asserts/images/main_bg.png'
const Login = () => {
    const history = useHistory();
    const goToRegistration = () => {
        history.push(RouteNames.REGISTRATION)
    }
    return (
        <div className='login-wrapper' style={{backgroundImage: `url(${bg})` }}>
            <div className='login-container'>
                <div className='login-form-layout'>
                    <div className='title'>АЗИ онлайн</div>
                    <img className="sidebar-bg" src={logo} alt="logo"/>
                    <div className='subtitle'>Вход</div>
                   <LoginForm/>
                    <div className="to-registration">
                        <div>Нет аккаунта?</div>
                        <div className="register" onClick={goToRegistration}>Зарегестироваться</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(Login);