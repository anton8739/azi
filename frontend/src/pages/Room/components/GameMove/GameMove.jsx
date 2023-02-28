import React, {useState} from 'react';
import './GameMove.scss'
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import ButtonSecondary from "components /common/Button/ButtonSecondary/ButtonSecondary";
import {Slider} from "antd";
import {useAuthStore, useRoomStore, useWebsocketStore} from "stores";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
const GameMove = ({type, show, currentBid,maxBid}) => {
    const {makeMove,userBid} = useWebsocketStore();

    const {user} = useAuthStore();
    const params = useParams();
    const [value, setValue] = useState(20)
    const makeBid = () => {
        makeMove(params.id, user.id, false, value, value)
        setValue(20)
    }
    const confirmBid = () => {
        makeMove(params.id, user.id, false, currentBid - userBid, currentBid)
        setValue(20)
    }
    const raiseBid = () => {
        makeMove(params.id, user.id, false, currentBid - userBid + value, currentBid+value)
        setValue(20)
    }
    const pass = () => {
        makeMove(params.id, user.id, true, null)
        setValue(20)
    }
    return (
        <>
            {show && <div className="game-move">
                <div className="game-move-container">
                    <div className="game-move-select">
                        <Slider vertical
                                value={value}
                                onChange={(value) => setValue(value)}
                                trackStyle={{background: "#E29A0C"}}
                                railStyle={{background: "rgba(0, 0, 0, 0.4)"}}
                                handleStyle={{background: "#E29A0C"}}
                                max={maxBid || 100}
                        />
                    </div>
                    {type ==="first" && <div className="game-move-actions">
                        {type ==="first"}
                        <ButtonSecondary width='fit-content' height='auto' onClick={pass}>
                            Сбросить
                        </ButtonSecondary>
                        <ButtonPrimary width='fit-content' height='auto' onClick={makeBid}>
                            Ставка: {value}
                        </ButtonPrimary>
                    </div>}
                    {type ==="next" && <div className="game-move-actions">
                        {type ==="first"}
                        <ButtonSecondary width='fit-content' height='auto'  onClick={pass}>
                            Сбросить
                        </ButtonSecondary>
                        <ButtonPrimary width='fit-content' height='auto'  onClick={confirmBid}>
                            Уровнять: {currentBid}
                        </ButtonPrimary>
                        <ButtonPrimary width='fit-content' height='auto'  onClick={raiseBid}>
                            Поднять: {currentBid + value}
                        </ButtonPrimary>
                    </div>}
                </div>

            </div>}
        </>
    );
}

export default observer(GameMove);