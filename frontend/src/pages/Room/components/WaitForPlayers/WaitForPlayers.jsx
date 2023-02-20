import React from 'react';
import './WaitForPlayers.scss'
import {Spin} from "antd";
const WaitForPlayers = ({status}) => {
    return (
        <>
            {status && <div className="wait-for-players">
                <div>
                    Ожидайте подключения других игроков
                </div>
                <div className="wait-for-players-spin"><Spin size='large'/></div>
            </div>}
        </>
    );
}

export default WaitForPlayers;