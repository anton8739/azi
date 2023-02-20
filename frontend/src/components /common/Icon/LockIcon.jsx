import React from 'react';

const LockIcon = ({ style, fill = '#333333' }) => {
    return (
        <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.28564 11.1624V7.34426C7.28564 4.67153 9.40707 2.57153 12.1071 2.57153C14.8071 2.57153 16.9285 4.67153 16.9285 7.34426V11.1624" stroke="url(#paint0_linear_237_8616)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.35728 11.1626H18.8573C19.918 11.1626 20.7859 12.0217 20.7859 13.0717V19.7535C20.7859 20.8035 19.918 21.6626 18.8573 21.6626H5.35728C4.29657 21.6626 3.42871 20.8035 3.42871 19.7535V13.0717C3.42871 12.0217 4.29657 11.1626 5.35728 11.1626Z" stroke="url(#paint1_linear_237_8616)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_237_8616" x1="12.1071" y1="2.57153" x2="12.1071" y2="11.1624" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
                <linearGradient id="paint1_linear_237_8616" x1="12.1073" y1="11.1626" x2="12.1073" y2="21.6626" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
            </defs>
        </svg>

    );
}

export default LockIcon;