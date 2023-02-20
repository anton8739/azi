import React from 'react';
import {observer} from "mobx-react-lite";
import './AziOverlay.scss'
import azi from 'asserts/images/azi-overlay.png'
const AziOverlay = ({status}) => {
    return (
        <>
            {status && <div className="azi-overlay">
                <img src={azi} alt='azi'/>
            </div>}
        </>
    );
}

export default observer(AziOverlay);