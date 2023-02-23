import React, {useState} from 'react';
import './UserHandCard.scss'
import {cardImageMap} from "utils/cardMap";
import {observer} from "mobx-react-lite";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import CoinsIcon from "components /common/Icon/CoinsIcon";
import {useAuthStore, useWebsocketStore} from "stores";
import {useParams} from "react-router-dom";
import BribeIcon from "components /common/Icon/BribeIcon";
const UserHandCard = ({cards, waitForGameMove, bid,bribe,winner}) => {
    const [selectedCard, setActiveCard] = useState(null);
    const {makeGameMove, activeCard} = useWebsocketStore();
    const params = useParams();
    const {user} = useAuthStore();
    const dropCard = () => {
        if(selectedCard) {
            makeGameMove(params.id,user.id,selectedCard)
            setActiveCard(null)
        }
    }
    return (
        <div className="user-card-wp">
            <div className="move-btn">
                {activeCard && <div className="active-hand-card"><img src={cardImageMap[activeCard.suit][activeCard.value]} alt='card'/></div>}
                {bid ? <div className="bid-user-hand"><div>{bid}</div><CoinsIcon/></div> : ""}
                {bribe ? <div className="bid-user-hand"><div>{bribe}</div><BribeIcon fill='#FFFFFF'/></div> : ""}
                {winner?.isWinner && <div className="player-card-game-win">
                    <div>Выигрыш:</div>
                    <div>{winner.amount}</div>
                </div>}
                {waitForGameMove &&   <ButtonPrimary onClick={dropCard}>Походить</ButtonPrimary>}
            </div>

            <div className={`user-hand-cards `}>
                {cards?.map(card =>
                    <div
                        className={`item ${waitForGameMove && "active"} ${selectedCard?.value === card.value && selectedCard?.suit === card.suit && "selected"}`}
                         onClick={() => setActiveCard(card)}>
                        <img src={cardImageMap[card.suit][card.value]} alt='card'/>
                    </div>
                )}
            </div>
        </div>

    );
}

export default observer(UserHandCard);