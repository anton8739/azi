import React from 'react';

const EmailIcon = ({ style, fill = '#333333' }) => {
    return (
        <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.48038 4.71436H19.7531C20.8031 4.71436 21.6622 5.55007 21.6622 6.5715V17.7144C21.6622 18.7358 20.8031 19.5715 19.7531 19.5715H4.48038C3.43038 19.5715 2.57129 18.7358 2.57129 17.7144V6.5715C2.57129 5.55007 3.43038 4.71436 4.48038 4.71436Z" stroke="url(#paint0_linear_237_8610)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.6622 6.57153L12.1167 13.0715L2.57129 6.57153" stroke="url(#paint1_linear_237_8610)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_237_8610" x1="12.1167" y1="4.71436" x2="12.1167" y2="19.5715" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
                <linearGradient id="paint1_linear_237_8610" x1="12.1167" y1="6.57153" x2="12.1167" y2="13.0715" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
            </defs>
        </svg>

    );
}

export default EmailIcon;


