import React from 'react';
import './RoomCard.scss'
import LockIcon from "components /common/Icon/LockIcon";
import {useHistory} from "react-router-dom";
import {RouteNames} from "utils/routes";

const RoomCard = ({room}) => {
    const history = useHistory();
    const openRoom = () => {
        if (!room.locked) {
            history.push({
                pathname: `${RouteNames.ROOM}/${room.id}`,
                state: {
                    auth: true
                }
            })
        }
    }
    return (
        <div className="room-card" onClick={openRoom}>
            <div className="title">
                {room.name}
                {room.locked && <LockIcon fill='#E9B95B'/>}
            </div>
            <div className="players-wp">
                <div className="text">Игроки:</div>
                <div className="value">{room.connected_players} / {room.players_limit}</div>

            </div>
            <div className="bid-wp">
                <div className="text">Ставка:</div>
                <div className="value">{room.bid}</div>
            </div>

        </div>
    );
}

export default RoomCard;