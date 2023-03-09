import React from 'react';
import {observer} from "mobx-react-lite";
import './GameBank.scss'
import {cardImageMap} from "utils/cardMap";
import card_bg from "asserts/images/card_bg.png";

const GameBank = ({trumpCard, bankBalance,hideCards}) => {
    return (
        <div className="game-bank">
            {trumpCard && <div className="tramp-card">
                {hideCards ?  <img src={card_bg} alt='card'/>: <img src={cardImageMap[trumpCard.suit][trumpCard.value]} alt='card'/>}
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