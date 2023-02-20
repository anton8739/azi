const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            const result = data.map(item => {
                delete item.dataValues.password;
                return item
            })
            res.send(result);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ошибка получения пользователей."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            if (data) {
                delete data.dataValues.password;
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Не удалось найти пользователя с  id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ошибка получения пользователя с id=" + id
            });
        });
};
exports.mute = (req, res) => {
    const id = req.body.id;
    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Звук отключен/включен."
                });
            } else {
                res.status(500).send({
                    message: "Ошибка отключения звука"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ошибка отключения звука"
            });
        });
};