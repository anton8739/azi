import React from 'react';
import './Header.scss'
import {observer} from "mobx-react-lite";
import NavBarLeft from "pages/Home/Header/NavBarLeft/NavBarLeft";
import NavBarRight from "pages/Home/Header/NavBarRight/NavBarRight";
const Header = (props) => {
    return (
        <div className="home-header">
            <div className='home-header-container'>
                <NavBarLeft/>
                <NavBarRight/>
            </div>
        </div>
    );
}

export default observer(Header);