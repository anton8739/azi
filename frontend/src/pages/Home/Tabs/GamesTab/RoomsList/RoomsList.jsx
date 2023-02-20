import React from 'react';
import RoomCard from "pages/Home/Tabs/GamesTab/RoomsList/RoomCard/RoomCard";
import CheckPasswordModal from "pages/Home/Tabs/GamesTab/CheckPasswordModal/CheckPasswordModal";

const RoomsList = ({rooms}) => {
    console.log(rooms)
    return (
        <div className="room-list">
            {rooms.sort((a,b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }).map(room => {
                if (!room.locked) {
                    return <RoomCard room={room}/>
                } else {
                    return <CheckPasswordModal room={room} Trigger={<div><RoomCard room={room}/></div>}/>
                }

            })}
        </div>
    );
}

export default RoomsList;