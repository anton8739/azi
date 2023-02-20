

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
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
            type: Sequelize.INTEGER
        },
        games: {
            type: Sequelize.INTEGER
        },
        balance: {
            type: Sequelize.INTEGER
        },
        active: {
            type: Sequelize.BOOLEAN
        },
        mute: {
            type: Sequelize.BOOLEAN
        }
    });

    return User;
};