import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import './GamesTab.scss'
import {useRoomStore} from "stores";
import RoomsList from "pages/Home/Tabs/GamesTab/RoomsList/RoomsList";
import CreateRoomModal from "pages/Home/Tabs/GamesTab/CreateRoomModal/CreateRoomModal";
const GamesTab = (props) => {
    const {loadRooms, rooms} = useRoomStore();
    useEffect(() => {
        loadRooms()
    }, [])
    console.log(rooms)
    return (
        <div className="games-tab-container">
            <RoomsList rooms={rooms}/>
            <CreateRoomModal/>
        </div>
    );
}

export default observer(GamesTab);