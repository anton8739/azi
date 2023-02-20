import React from 'react';
import './ButtonPrimary.scss'
import {Button} from "antd";
const ButtonPrimary = ({children, onClick,width,height,loading}) => {
    return (
        <Button loading={loading} className="button-primary" onClick={onClick} style={{width: width, height: height}}>{children}</Button>
    );
}

export default ButtonPrimary;