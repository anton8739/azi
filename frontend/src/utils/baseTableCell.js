import './baseTableCell.scss'
import {Avatar} from "antd";
import icon from "asserts/images/default-icon.png";
import prize1 from "asserts/images/prize-1.png";
import prize2 from "asserts/images/prize-2.png";
import prize3 from "asserts/images/prize-3.png";
import React from "react";
export const userNameCell = (record, row) => {
    return <div className="username-cell">
        <Avatar size={40} icon={<img src={icon}/>} />
        <div>
            {record}
        </div>
    </div>;
}
export const userGamesCell = (record, row) => {
    return <div className="games-cell">
        {record}
    </div>;
}
export const userScoreCell = (record, row) => {
    return <div className="score-cell">
        {record}
    </div>;
}
export const userPositionCell = (record, row) => {
    let img = null;
    if (record === 1) {
        img = prize1;
    }
    if (record === 2 ) {
        img = prize2;
    }
    if (record === 3) {
        img = prize3;
    }
    return <div className="position-cell" >
        {img ? <img src={img}/> :  record}
    </div>;
}
