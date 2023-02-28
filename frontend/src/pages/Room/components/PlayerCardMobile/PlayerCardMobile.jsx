import React from 'react';
import './PlayerCardModile.scss'
import {Avatar} from "antd";
import icon from "asserts/images/default-icon.png";
import card_bg from "asserts/images/card_bg.png";
import CoinsIcon from "components /common/Icon/CoinsIcon";
import {cardImageMap} from "utils/cardMap";
import LoadingTimer from "components /common/Field/LoadingTimer/LoadingTimer";
import {observer} from "mobx-react-lite";
import {statusMap} from "stores/room.store";
import BribeIcon from "components /common/Icon/BribeIcon";

const PlayerCardMobile = ({player, diraction,loading,  timer }) => {
    const {status,cardsAmount,activeCard,disabled,bid,bribe,winner, balance, name } = player;
    let cards = [];
    for (let i = 0; i < cardsAmount; i++) {
        cards.push(i)
    }
    const statusBg = status === 1 ? "#F13F17" : (status === 2 ? "#E29A0C" : "transparent")
    const diractionClassMap = {
        0: "left",
        1: "left-bottom",
        2: "bottom",
        3: "right-bottom",
        4: "right"
    }
    return (
        <div className={`player-card-mobile ${diractionClassMap[diraction]} ${disabled && "disabled"}`}>
            <div className="player-info">
                {winner?.isWinner && <div className="player-card-game-win">
                    <div>Выигрыш:</div>
                    <div>{winner.amount}</div>
                </div>}
                {loading ? <LoadingTimer size={60} timerValue={timer} isPlaying={loading}/> :
                    <Avatar size={60} icon={<img src={icon}/>} style={{ border: `3px solid ${statusBg}`}}/>}
                <div className="player-info-content">
                    <div className="player-name">
                        <div>{name}</div>
                    </div>
                    <div className="player-label">
                        <div className="player-balance">
                            <div>
                                {balance}
                            </div>
                            <CoinsIcon/>
                        </div>
                        {bribe ? <div className="player-card-bribe">
                            <div>{bribe}</div>
                            <BribeIcon fill='#FFFFFF'/></div> : ""}
                    </div>
                    <div className="player-card-status"
                         style={{display: !!status ? "flex" : "none", background: statusBg}}>
                        {statusMap[status]}
                    </div>
                </div>
            </div>
            <div className="player-card-mobile-wp">
                <div className={`player-cards ${diractionClassMap[diraction]}`}>
                    {cards.map(card =>
                        <div className="item" key={card}>
                            <img src={card_bg} alt='card'/>
                        </div>
                    )}
                </div>
            </div>


            <div className={`player-active-card ${diractionClassMap[diraction]}`}>
                {bid ? <div className="player-card-bid">
                    <div>{bid}</div>
                    <CoinsIcon/></div> : ""}
                {activeCard &&  <img src={cardImageMap[activeCard.suit][activeCard.value]} alt='card'/>}

            </div>
        </div>
    );
}

export default observer(PlayerCardMobile);