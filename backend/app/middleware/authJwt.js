const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.users;

verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        if (user.roleId ===1) {
            next();
        } else {
            res.status(403).send({
                message: "Require Admin Role!"
            });
        }
    });
};

isClient = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        User.findByPk(req.userId).then(user => {
            if (user.roleId === 2) {
                next();
            } else {
                res.status(403).send({
                    message: "Require Admin Role!"
                });
            }
        });
    });
};


const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isClient: isClient,
};
module.exports = authJwt;