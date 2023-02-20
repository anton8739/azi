import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import './CustomSelectPlayersLimit.scss'
import {Input} from "antd";
const CustomSelectPlayersLimit = ({name, context}) => {
    const { register, errors, getValues, setValue } = useContext(context);
    const [currentValue, setCurrentValue] = useState(2);
    const onChange = (value) => {
        setValue(name, value);
        setCurrentValue(value)
    }
    return (
        <div className="custom-select-player-limit-wp">
            <div className="custom-select-player-limit-label">
                <div>Количество игроков:</div>
                <div>{currentValue}/{6}</div>
            </div>
            <div className="custom-select-player-limit">
                <div className="custom-select-player-limit-item active"/>
                <div
                    className={`custom-select-player-limit-item ${currentValue > 1 && "active"}`}
                    onClick={() => onChange(2)}/>
                <div className={`custom-select-player-limit-item ${currentValue > 2 && "active"}`}
                     onClick={() => onChange(3)}/>
                <div className={`custom-select-player-limit-item ${currentValue > 3 && "active"}`}
                     onClick={() => onChange(4)}/>
                <div className={`custom-select-player-limit-item ${currentValue > 4 && "active"}`}
                     onClick={() => onChange(5)}/>
                <div className={`custom-select-player-limit-item ${currentValue > 5 && "active"}`}
                     onClick={() => onChange(6)}/>
            </div>
            <Input type='hidden' value={currentValue}
            />
        </div>
    );
}

export default observer(CustomSelectPlayersLimit);