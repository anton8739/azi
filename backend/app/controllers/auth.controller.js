const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Role = db.roles;

const Op = db.Sequelize.Op;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    // Save User to Database
    console.log(req.body.email)
    console.log(req.body.username)
    console.log(bcrypt.hashSync(req.body.password, 8))
    User.create({
        email: req.body.email,
        username: req.body.username,
        roleId: 1,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {
            console.log(user)
            res.send({message: "Пользователь успешно зарегистрирован"});
        })
        .catch(err => {
            console.log("!!!!!!!")
            console.log(err)
            res.status(500).send({message: err.message});
        });
};

exports.signin = (req, res) => {

    if (!req.body.email || !req.body.password) {
        return res.status(400).send({
            message: "Email и пароль обязательные поля"
        });
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({message: "Пользователь не найден"});
            }

            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Не верный пароль"
                });
            }

            let token = jwt.sign({id: user.id}, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            delete user.dataValues.password
            res.status(200).send({
                ...user.dataValues,
                accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
};

exports.checkAuth = (req, res) => {
    // Save User to Database
    User.findOne({
        where: {
            id: req.userId
        }
    }).then(user => {
        let token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        delete user.dataValues.password
        res.status(200).send({
            ...user.dataValues,
            accessToken: token
        });
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};