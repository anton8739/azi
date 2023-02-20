const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.roles = require("../models/role.model.js")(sequelize, Sequelize);
db.rooms = require("../models/room.model.js")(sequelize, Sequelize);
/*user-role*/
db.roles.hasMany(db.users, { as: "users" });
db.users.belongsTo(db.roles, {
    foreignKey: "roleId",
    as: "role",
});
/*user-room*/
db.rooms.hasMany(db.users, { as: "players" });

module.exports = db;