import React, {useContext, cloneElement, useState} from 'react';
import {Checkbox, Input} from "antd";
import './CheckBoxField.scss'
import {observer} from "mobx-react-lite";
const CheckBoxField = ({context,name, label}) => {
    const { setValue } = useContext(context);
    const [inputValue, setInputValue] = useState();
    const onChange = (e) => {
        const value = e.target.checked
        setInputValue(value)
        setValue(name,value)
    }

    return (
        <div className="checkbox-field-wp">
            <Checkbox
                name={name}
                onChange={onChange}
                checked={inputValue}
            />
            <label className="checkbox-field-label">{label}</label>
        </div>

    );
}

export default observer(CheckBoxField);