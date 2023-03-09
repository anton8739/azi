

module.exports = (sequelize, Sequelize) => {

    const game_state_default = {
        wait_for_players: true,
        starting: false,
        game_start: false,
        moveOrder: [],
        firstMoveId: 0, // 0 - 6
        firstCard: null,
        hideCards: true,
        currentBid: 0,
        deck: [],
        players : [],
        bank: {
            trumpCard: null,
            balance: 0
        }
    };

    const Room = sequelize.define("rooms", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        bid: {
            type: Sequelize.INTEGER
        },
        last_active_date: {
            type: 'TIMESTAMP',
        },
        players_limit: {
            type: Sequelize.INTEGER
        },
        connected_players: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        password: {
            type: Sequelize.STRING
        },
        locked: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        game_state: {
            type: Sequelize.DataTypes.JSON,
            defaultValue: game_state_default
        }
    });

    return Room;
};