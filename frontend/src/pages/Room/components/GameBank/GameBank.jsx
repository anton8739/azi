import React from 'react';
import {observer} from "mobx-react-lite";
import './GameBank.scss'
import {cardImageMap} from "utils/cardMap";

const GameBank = ({trumpCard, bankBalance}) => {
    return (
        <div className="game-bank">
            {trumpCard && <div className="tramp-card">
                <img src={cardImageMap[trumpCard.suit][trumpCard.value]} alt='card'/>
            </div>}
            <div className="bank">
                <div className="bank-label">
                    Банк
                </div>
                <div className="bank-balance">
                    {bankBalance}
                </div>
            </div>
        </div>
    );
}

export default observer(GameBank);