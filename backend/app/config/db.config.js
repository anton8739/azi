module.exports = {
    HOST: process.env.DB_HOST || "127.0.0.1",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "azi",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};