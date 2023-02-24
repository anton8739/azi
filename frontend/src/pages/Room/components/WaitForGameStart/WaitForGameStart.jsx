import React from 'react';
import './WaitForGameStart.scss'
import {Spin} from "antd";
import LoadingTimer from "components /common/Field/LoadingTimer/LoadingTimer";
const WaitForGameStart = ({status}) => {
    return (
        <>
            {status && <div className="wait-for-game-start">
                <div>
                    Ожидайте начала игры!
                </div>
                <LoadingTimer size={35} isPlaying={true} timerValue={3}/>
            </div>}
        </>
    );
}

export default WaitForGameStart;