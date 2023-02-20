const { authJwt } = require("../middleware");

module.exports = app => {
    const users = require("../controllers/user.controller");

    let router = require("express").Router();
    // Retrieve all Users
    router.get("/", [authJwt.verifyToken], users.findAll);

    // Retrieve a single User with id
    router.get("/:id",[authJwt.verifyToken], users.findOne);

    router.put("/mute",[authJwt.verifyToken], users.mute);


    app.use("/api/users", router);
};