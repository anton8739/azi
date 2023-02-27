import React from 'react';
import './GameTabSwitch.scss'
import {observer} from "mobx-react-lite";
const GameTabSwitch = ({activeTab, setActiveTab}) => {
    return (
        <div className="game-tab-switch">
            <div className={`game-tab-switch-item ${activeTab === "opened" && "active"}`} onClick={() => setActiveTab("opened")}>
                Открытые
            </div>
            <div className={`game-tab-switch-item ${activeTab === "locked" && "active"}`} onClick={() => setActiveTab("locked")}>
                Закрытые
            </div>
        </div>
    );
}

export default observer(GameTabSwitch);