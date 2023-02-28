import React from 'react';
import {Table} from "antd";
import {baseUserColumns} from "utils/baseTableColumns";
import './UserTable.scss'
const UserTable = ({users}) => {
    const dataSource = users.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else if (a.score === b.score) {
            return 0;
        }  else {
            return -1;
        }
    } ).map((user, index) => {
        return {
            ...user, index: index+1
        }
    })
    return (
        <Table  className="user-table" columns={baseUserColumns} dataSource={dataSource}     pagination={false} />
    );
}

export default UserTable;