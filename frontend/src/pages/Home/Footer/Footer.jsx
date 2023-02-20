import React from 'react';
import './Footer.scss'
import TelegramIcon from "components /common/Icon/TelegramIcon";
import {observer} from "mobx-react-lite";
const Footer = (props) => {
    return (
        <div className="home-footer">
            <div className='title'>
                Наш телеграм чат
            </div>
            <TelegramIcon fill='#E7AF43'/>
        </div>
    );
}

export default observer(Footer);