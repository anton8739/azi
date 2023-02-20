import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import './RoomGameZone.scss'
import PlayerCard from "pages/Room/components/PlayerCard/PlayerCard";
import {useBreakPoint, useMediaQuery} from "hooks";
import PlayerCardMobile from "pages/Room/components/PlayerCardMobile/PlayerCardMobile";
import GameBank from "pages/Room/components/GameBank/GameBank";
import AziOverlay from "pages/Room/components/AziOverlay/AziOverlay";
import WinModal from "pages/Room/components/WinModal/WinModal";
import ErrorModal from "pages/Room/components/ErrorModal/ErrorModal";
import GameMove from "pages/Room/components/GameMove/GameMove";
import {useRoomStore, useWebsocketStore} from "stores";
import WaitForPlayers from "pages/Room/components/WaitForPlayers/WaitForPlayers";
import WaitForGameStart from "pages/Room/components/WaitForGameStart/WaitForGameStart";

const RoomGameZone = ({gameState}) => {
    const isMiddle = useMediaQuery(useBreakPoint().down('md'));
    const {players, user, bank} = gameState;
    return (
        <div className="room-zone-container" >
            <WaitForPlayers status={gameState.wait_for_players}/>
            <WaitForGameStart status={!gameState.wait_for_players && !gameState.game_start}/>
            <GameMove show={user.move?.status}/>
            <AziOverlay status={user.azi}/>
            <ErrorModal open={user.error?.status} message={user.error?.message}/>
            <GameBank trumpCard={bank.trumpCard} bankBalance={bank.balance}/>
            {players.map((player, index) => !isMiddle ? <PlayerCard status={player.status}
                                                        player={player.player}
                                                        cardsAmount={player.cardsAmount}
                                                        activeCard={player.activeCard}
                                                        loading={player.loading}
                                                        diraction={index}
                                                        disabled={player.disabled}
                                                        timer={player.timer}
            /> : <PlayerCardMobile
                status={player.status}
                player={player.player}
                cardsAmount={player.cardsAmount}
                activeCard={player.activeCard}
                loading={player.loading}
                diraction={index}
                disabled={player.disabled}
                timer={player.timer}
            />)}
        </div>
    );
}

export default observer(RoomGameZone);