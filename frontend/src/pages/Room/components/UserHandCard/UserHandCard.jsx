import React, {useState} from 'react';
import './UserHandCard.scss'
import {cardImageMap} from "utils/cardMap";
import {observer} from "mobx-react-lite";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
const UserHandCard = ({cards, status}) => {
    const [activeCard, setActiveCard] = useState(null);
    const dropCard = (card) => {
        if(activeCard) {
            console.log(activeCard)
        }
    }
    return (
        <div className="user-card-wp">
            {status && <div className="move-btn"><ButtonPrimary onClick={dropCard}>Походить</ButtonPrimary></div>}
            <div className={`user-hand-cards `}>
                {cards?.map(card =>
                    <div
                        className={`item ${status && "active"} ${activeCard?.value === card.value && activeCard?.suit === card.suit && "selected"}`}
                         onClick={() => setActiveCard(card)}>
                        <img src={cardImageMap[card.suit][card.value]} alt='card'/>
                    </div>
                )}
            </div>
        </div>

    );
}

export default observer(UserHandCard);