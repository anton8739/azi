import React from 'react';

const LockIcon = ({ style, fill = '#333333' }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.58057 11.258V8.03224C9.58057 5.77418 7.81126 4 5.55941 4C3.30757 4 2.18164 5.45161 2.18164 6.17741" stroke="url(#paint0_linear_56_992)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.6153 11.2578H19.8745C20.7592 11.2578 21.483 11.9836 21.483 12.8707V18.5158C21.483 19.4029 20.7592 20.1287 19.8745 20.1287H8.6153C7.73064 20.1287 7.00684 19.4029 7.00684 18.5158V12.8707C7.00684 11.9836 7.73064 11.2578 8.6153 11.2578Z" stroke="url(#paint1_linear_56_992)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_56_992" x1="5.88111" y1="4" x2="5.88111" y2="11.258" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
                <linearGradient id="paint1_linear_56_992" x1="14.2449" y1="11.2578" x2="14.2449" y2="20.1287" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill}/>
                    <stop offset="1" stopColor={fill}/>
                </linearGradient>
            </defs>
        </svg>


    );
}

export default LockIcon;