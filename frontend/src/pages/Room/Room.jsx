import React, {useEffect, useRef} from 'react';
import './Room.scss'
import {observer} from "mobx-react-lite";
import bgBig from "asserts/images/room_bg_big.svg";
import bgSmall from "asserts/images/room_bg_small.svg";
import {useBreakPoint, useMediaQuery} from "hooks";
import RoomGameZone from "pages/Room/RoomGameZone/RoomGameZone";
import MuteIcon from "components /common/Icon/MuteIcon";
import LeaveIcon from "components /common/Icon/LeaveIcon";
import UnMuteIcon from "components /common/Icon/UnMuteIcon";
import {useAuthStore, useRoomStore, useWebsocketStore} from "stores";
import {useHistory, useParams} from "react-router-dom";
import {RouteNames} from "utils/routes";
import TengeIcon from "components /common/Icon/TengeIcon";
import UserHandCard from "pages/Room/components/UserHandCard/UserHandCard";
import bg_sound from 'asserts/audio/bg_audio.mp3'
import ReactAudioPlayer from 'react-audio-player';
const Room = () => {
    const isMiddle = useMediaQuery(useBreakPoint().down('md'))
    const {setMute, user} = useAuthStore();
    const {gameState,leaveRoom} = useWebsocketStore();
    const {isConnected,joinRoom} = useWebsocketStore();
    const history = useHistory();
    const params = useParams();
    const leaveCurrentRoom = () => {
        leaveRoom(params.id,user.id)
        history.push(RouteNames.HOME)
    }
    useEffect(() => {
        const auth = history.location.state?.auth;
        if (!auth) {
            history.push(RouteNames.ROOM)
        } else {
            joinRoom(params.id, user.id)
        }
    }, [])
    const iconSize = !isMiddle ? '48px' : '24px';
    return (
        <div className="room-wrapper" style={{backgroundImage: `url(${isMiddle ? bgSmall : bgBig})`}}>
            
            <div className="room-leave-btn" onClick={leaveCurrentRoom}>
                <LeaveIcon style={{width: iconSize, height: iconSize}} fill='#EBC57A'/>
            </div>
            <div className="room-mute-btn" onClick={() => setMute(!user.mute)}>
                {user.mute ? <UnMuteIcon style={{width: iconSize, height: iconSize}} fill='#EBC57A'/> :
                    <MuteIcon style={{width: iconSize, height: iconSize}} fill='#EBC57A'/>}
            </div>
            <div className="room-user-panel">
                <UserHandCard cards={gameState.user.cards} status={gameState.user.dropCard}/>
                <div className="balance">
                    <div>
                        {user.balance}
                    </div>
                    <TengeIcon/>
                </div>
            </div>
            <RoomGameZone gameState={gameState}/>
        </div>
    );
}

export default observer(Room);