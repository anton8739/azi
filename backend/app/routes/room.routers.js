const { authJwt } = require("../middleware");
module.exports = app => {
    const rooms = require("../controllers/room.controller");

    let router = require("express").Router();
    // Retrieve all Users
    router.get("/", [authJwt.verifyToken], rooms.findAll);

    // Retrieve a single User with id
    router.get("/:id",[authJwt.verifyToken], rooms.findOne);

    router.post("/",[authJwt.verifyToken], rooms.create);
    router.post("/auth",[authJwt.verifyToken], rooms.checkPassword);

    app.use("/api/rooms", router);
};