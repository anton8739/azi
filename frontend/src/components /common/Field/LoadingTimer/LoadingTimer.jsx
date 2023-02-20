import React, {useEffect, useState} from 'react';
import './LoadingTimer.scss'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const LoadingTimer = ({size , timerValue, isPlaying}) => {

    return (
            <CountdownCircleTimer
                isPlaying={isPlaying}
                size={size}
                duration={timerValue}
                strokeWidth={3}
                colors={['#F7B801', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
    );
}

export default LoadingTimer;