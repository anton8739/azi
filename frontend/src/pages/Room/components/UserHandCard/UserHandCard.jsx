import React, {useState} from 'react';
import './UserHandCard.scss'
import {cardImageMap} from "utils/cardMap";
import {observer} from "mobx-react-lite";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import CoinsIcon from "components /common/Icon/CoinsIcon";
import {useAuthStore, useWebsocketStore} from "stores";
import {useParams} from "react-router-dom";
import BribeIcon from "components /common/Icon/BribeIcon";
import {useBreakPoint, useMediaQuery} from "hooks";
import LoadingTimer from "components /common/Field/LoadingTimer/LoadingTimer";
import TengeIcon from "components /common/Icon/TengeIcon";

const UserHandCard = ({cards, waitForGameMove, bid, bribe, winner,waitForMove,currentBalance}) => {
    const [selectedCard, setActiveCard] = useState(null);
    const isMiddle = useMediaQuery(useBreakPoint().down('md'))
    const {makeGameMove, activeCard} = useWebsocketStore();
    const params = useParams();
    const {user} = useAuthStore();
    const dropCard = () => {
        if (selectedCard && !selectedCard.blocked) {
            makeGameMove(params.id, user.id, selectedCard)
            setActiveCard(null)
        }
    }
    return (
        <>
            <div className="user-panel-menu">
                <div className="user-card-move-btn">
                {activeCard &&
                    <div className="active-hand-card"><img src={cardImageMap[activeCard.suit][activeCard.value]}
                                                           alt='card'/></div>}
                {bid ? <div className="bid-user-hand">
                    <div>{bid}</div>
                    <CoinsIcon/></div> : ""}

                {winner?.isWinner && <div className="player-card-game-win">
                    <div>Выигрыш:</div>
                    <div>{winner.amount}</div>
                </div>}
                    {waitForGameMove && <ButtonPrimary onClick={dropCard}>Походить</ButtonPrimary>}
                    {bribe ? <div className="bid-user-hand">
                        <div>{bribe}</div>
                        <BribeIcon fill='#FFFFFF'/></div> : ""}

            </div>
                <div className='balance-wp'>
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

            <div className="user-card-wp">

                <div className={`user-hand-cards `}>
                    {cards?.map(card =>
                        <div
                            className={`item ${card.blocked && "blocked"} ${waitForGameMove && "active"} ${selectedCard?.value === card.value && selectedCard?.suit === card.suit && "selected"}`}
                            onClick={() => setActiveCard(card)}>
                            {card.blocked && <div className="card-overlay"/>}
                            <img src={cardImageMap[card.suit][card.value]} alt='card'/>
                        </div>
                    )}
                </div>
            </div>
        </>


    );
}

export default observer(UserHandCard);