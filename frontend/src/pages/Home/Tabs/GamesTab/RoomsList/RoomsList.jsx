import React from 'react';
import RoomCard from "pages/Home/Tabs/GamesTab/RoomsList/RoomCard/RoomCard";
import CheckPasswordModal from "pages/Home/Tabs/GamesTab/CheckPasswordModal/CheckPasswordModal";
import {observer} from "mobx-react-lite";

const RoomsList = ({rooms, activeTab}) => {
    return (
        <div className="room-list-wp">
            <div className="room-list">
                {[...rooms].sort((a,b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                }).map(room => {
                    if (!room.locked) {
                        return <RoomCard  key={room.id} room={room}/>
                    } else {
                        return <CheckPasswordModal key={room.id} room={room} Trigger={<RoomCard key={room.id} room={room}/>}/>
                    }

                })}
            </div>
        </div>

    );
}


export default observer(RoomsList);