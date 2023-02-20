import React, {useContext, cloneElement, useState, useEffect} from 'react';
import {Input} from "antd";
import './InputField.scss'
import {observer} from "mobx-react-lite";
const InputField = ({context,maxWidth,name, type,placeholder, icon, withHide,hideIcon,disabled}) => {
    const { register, errors, getValues, setValue } = useContext(context);
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState();
    const isError = errors && errors[name];
    const errorMessage = errors && errors[name]?.message;
    const onChange = (e) => {
        const value = e.target.value
        setInputValue(value)
        setValue(name,value)
    }
    const showPassword = () => {
        if (withHide) {
            setShow(!show)
        }
    }
    useEffect(() => {
        if (getValues(name) !== inputValue) {
            setInputValue(getValues(name))
        }
    }, [getValues(name)])
    return (
        <div className="input-field-wp">
            <Input  className="input-field"
                    type={!show ? type : "text"}
                    status={isError && 'error'}
                    prefix={<div onClick={showPassword}>{!show ? icon : hideIcon}</div>}
                    value={inputValue}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    style={{maxWidth: maxWidth }}
            />
            <label className="input-field-error">{errorMessage}</label>
        </div>

    );
}

export default observer(InputField);