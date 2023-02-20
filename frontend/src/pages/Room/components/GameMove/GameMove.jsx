import React, {useState} from 'react';
import './GameMove.scss'
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import ButtonSecondary from "components /common/Button/ButtonSecondary/ButtonSecondary";
import {Slider} from "antd";
const GameMove = ({type, show, equelAmount, onChooseAmount, onDrop}) => {
    const [value, setValue] = useState(20)
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
                        />
                    </div>
                    <div className="game-move-actions">
                        <ButtonSecondary width='100px' height='50px'>
                            Сбросить
                        </ButtonSecondary>
                        <ButtonPrimary width='100px' height='50px'>
                            Ставка: {value}
                        </ButtonPrimary>
                    </div>
                </div>

            </div>}
        </>
    );
}

export default GameMove;