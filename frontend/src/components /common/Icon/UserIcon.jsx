import React from 'react';

const UserIcon = ({ style, fill = '#333333' }) => {
    return (
        <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2379 21.4714V19.3714C20.2379 17.0614 18.395 15.1714 16.1426 15.1714H7.95217C5.69979 15.1714 3.85693 17.0614 3.85693 19.3714V21.4714" stroke="url(#paint0_linear_237_8686)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.0474 10.9715C14.3091 10.9715 16.1426 9.09113 16.1426 6.77153C16.1426 4.45194 14.3091 2.57153 12.0474 2.57153C9.78565 2.57153 7.95215 4.45194 7.95215 6.77153C7.95215 9.09113 9.78565 10.9715 12.0474 10.9715Z" stroke="url(#paint1_linear_237_8686)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_237_8686" x1="12.0474" y1="15.1714" x2="12.0474" y2="21.4714" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
                <linearGradient id="paint1_linear_237_8686" x1="12.0474" y1="2.57153" x2="12.0474" y2="10.9715" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
            </defs>
        </svg>

    );
}

export default UserIcon;