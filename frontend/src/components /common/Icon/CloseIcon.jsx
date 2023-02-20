import React from 'react';

const CloseIcon = ({ style, fill = '#333333' }) => {
    return (
        <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill={fill}/>
            <defs>
                <linearGradient id="paint0_linear_56_1006" x1="12" y1="5" x2="12" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
            </defs>
        </svg>
    );
}

export default CloseIcon;