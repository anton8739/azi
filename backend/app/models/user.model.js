

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        score: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        games: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        balance: {
            type: Sequelize.INTEGER,
            defaultValue: 10000
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        mute: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return User;
};