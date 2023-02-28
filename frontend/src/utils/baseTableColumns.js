import {userGamesCell, userNameCell, userPositionCell, userScoreCell} from "utils/baseTableCell";

export const baseUserColumns = [
    {
        title: 'Позиция',
        dataIndex: 'index',
        key: 'index',
        render: userPositionCell,
        maxWidth: '100px',
    },
    {
        title: 'Игрок',
        dataIndex: 'username',
        key: 'name',
        render: userNameCell,
    },
    {
        title: 'Игры',
        dataIndex: 'games',
        key: 'games',
        render: userGamesCell,
    },
    {
        title: 'Рейтинг',
        dataIndex: 'score',
        key: 'score',
        render: userScoreCell,
    },
]
