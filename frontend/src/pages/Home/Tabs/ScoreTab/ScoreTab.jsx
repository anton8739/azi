import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import './ScoreTab.scss'
import UserTable from "pages/Home/Tabs/ScoreTab/UserTable/UserTable";
import {useUserStore} from "stores";
const ScoreTab = (props) => {
    const {loadUsers, users} = useUserStore();
    useEffect(() => {
        loadUsers()
    }, [])
    return (
        <div className="score-tab-container">
            <UserTable users={users}/>
        </div>
    );
}

export default observer(ScoreTab);