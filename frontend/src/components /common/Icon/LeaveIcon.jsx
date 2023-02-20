import React from 'react';

const LeaveIcon = ({ style, fill = '#333333' }) => {
    return (
        <svg  style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_56_5867)">
                <path d="M2 1.00098C0.895431 1.00098 0 1.89641 0 3.00098V21.001C0 22.1055 0.895431 23.001 2 23.001H10.9C11.5075 23.001 12 22.5085 12 21.901C12 21.2935 11.5075 20.801 10.9 20.801H4.08695C2.98238 20.801 2.08696 19.9055 2.08696 18.801V5.20098C2.08696 4.09641 2.98239 3.20098 4.08696 3.20098H10.9C11.5075 3.20098 12 2.70849 12 2.10098C12 1.49346 11.5075 1.00098 10.9 1.00098H2Z" fill={fill}/>
                <path d="M15.999 4.00098L14.589 5.41098L20.169 11.001H7.99902V13.001H20.169L14.589 18.591L15.999 20.001L23.999 12.001L15.999 4.00098Z" fill={fill}/>
            </g>
            <defs>
                <linearGradient id="paint0_linear_56_5867" x1="6" y1="1.00098" x2="6" y2="23.001" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
                <linearGradient id="paint1_linear_56_5867" x1="15.999" y1="4.00098" x2="15.999" y2="20.001" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
                <clipPath id="clip0_56_5867">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.000976562)"/>
                </clipPath>
            </defs>
        </svg>


    );
}

export default LeaveIcon;