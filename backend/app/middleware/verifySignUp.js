const db = require("../models");
const User = db.users;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    if (!req.body.email ||  !req.body.password  || !req.body.username) {
        res.status(400).send({
            message: "Email и пароль обязательны"
        });
        next();
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Пользователь с таким Email уже существует"
            });
        }
        User.findOne({
            where: {
                username: req.body.username,
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Пользователь с таким именем уже существует"
                });
            }
            next();
        }).catch(e => {
            console.log(e)
        })
    }).catch(e => {
        console.log(e)
    })

};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;