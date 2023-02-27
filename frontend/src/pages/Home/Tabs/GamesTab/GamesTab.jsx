import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import './GamesTab.scss'
import {useRoomStore} from "stores";
import RoomsList from "pages/Home/Tabs/GamesTab/RoomsList/RoomsList";
import CreateRoomModal from "pages/Home/Tabs/GamesTab/CreateRoomModal/CreateRoomModal";
import GameTabSwitch from "pages/Home/Tabs/GamesTab/GameTabSwitch/GameTabSwitch";
const GamesTab = (props) => {
    const [activeTab, setActiveTab] = useState("opened");
    const {loadRooms, rooms} = useRoomStore();
    useEffect(() => {
        if (activeTab === "locked") {
            loadRooms(true)
        } else {
            loadRooms(false)
        }
    }, [activeTab])
    return (
        <div className="games-tab-container">
            <GameTabSwitch activeTab={activeTab} setActiveTab={setActiveTab}/>
            <RoomsList rooms={rooms} activeTab={activeTab}/>
            <CreateRoomModal/>
        </div>
    );
}

export default observer(GamesTab);