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
import LoadingTimer from "components /common/Field/LoadingTimer/LoadingTimer";
const Room = () => {
    const isMiddle = useMediaQuery(useBreakPoint().down('md'))
    const {setMute, user} = useAuthStore();
    const {gameState,leaveRoom, userBid,waitForMove,waitForGameMove,userBribe,currentBalance,currentWinner} = useWebsocketStore();
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
                <UserHandCard cards={gameState.user.cards} waitForGameMove={waitForGameMove} bid={userBid} bribe={userBribe} winner={currentWinner}/>
                <div className="user-panel-menu">
                    {(waitForMove || waitForGameMove) && <div className='loader'>
                        <LoadingTimer size={40} isPlaying={true} timerValue={15}/>
                    </div>}
                    <div className="balance">
                        <div>
                            {currentBalance}
                        </div>
                        <TengeIcon/>
                    </div>
                </div>
            </div>
            <RoomGameZone gameState={gameState} waitForMove={waitForMove}/>
        </div>
    );
}

export default observer(Room);