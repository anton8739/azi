import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import './Home.scss'
import logo from "asserts/images/azi.png";
import LoginForm from "pages/Login/LoginForm/LoginForm";
import Header from "pages/Home/Header/Header";
import Footer from "pages/Home/Footer/Footer";
import bg from "asserts/images/main_bg.png";
import ScoreTab from "pages/Home/Tabs/ScoreTab/ScoreTab";
import GamesTab from "pages/Home/Tabs/GamesTab/GamesTab";
import TabSwitch from "pages/Home/Tabs/TabSwitch/TabSwitch";
const Home = () => {
    const [activeTab, setActiveTab] = useState("games");
    const tabs = {
        score: <ScoreTab/>,
        games: <GamesTab/>
    }
    return (
            <div className='home-wrapper' style={{backgroundImage: `url(${bg})` }}>
                <Header/>
                <div className='home-container'>
                    <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab}/>
                    {tabs[activeTab]}
                </div>
                <Footer/>
            </div>
    );
}

export default observer(Home);