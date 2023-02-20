import React from 'react';
import './ButtonSecondary.scss'
import {Button} from "antd";
const ButtonSecondary = ({children, onClick,width,height,loading}) => {
    return (
        <Button loading={loading} className="button-secondary" onClick={onClick} style={{width: width, height: height}}>{children}</Button>
    );
}

export default ButtonSecondary;