import React from 'react';
import RoomCard from "pages/Home/Tabs/GamesTab/RoomsList/RoomCard/RoomCard";
import CheckPasswordModal from "pages/Home/Tabs/GamesTab/CheckPasswordModal/CheckPasswordModal";
import {observer} from "mobx-react-lite";
import {RouteNames} from "utils/routes";
import {useHistory} from "react-router-dom";

const RoomsList = ({rooms, activeTab}) => {
    const history = useHistory();
    const openRoom = (id, locked) => {
        if (!locked) {
            history.push({
                pathname: `${RouteNames.ROOM}/${id}`,
                state: {
                    auth: true
                }
            })
        }
    }
    return (
        <div className="room-list-wp">
            <div className="room-list">
                {[...rooms].sort((a,b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                }).map(room => {
                    if (!room.locked) {
                        return <RoomCard  key={room.id} room={room} onClick={() => openRoom(room.id, room.locked)}/>
                    } else {
                        return <CheckPasswordModal key={room.id} room={room} Trigger={<RoomCard key={room.id} room={room}/>}/>
                    }

                })}
            </div>
        </div>

    );
}


export default observer(RoomsList);