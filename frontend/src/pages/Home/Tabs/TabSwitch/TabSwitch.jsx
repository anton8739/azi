import React from 'react';
import {observer} from "mobx-react-lite";
import './TabSwitch.scss'
const TabSwitch = ({activeTab, setActiveTab}) => {

    return (
        <div className="home-tab-switch">
            <div className={`home-tab-switch-item ${activeTab === "games" && "active"}`} onClick={() => setActiveTab("games")}>
                Игры
            </div>
            <div className={`home-tab-switch-item ${activeTab === "score" && "active"}`} onClick={() => setActiveTab("score")}>
                Рейтинг
            </div>
        </div>
    );
}

export default observer(TabSwitch);