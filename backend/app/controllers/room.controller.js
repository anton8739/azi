const db = require("../models");
const bcrypt = require("bcryptjs");
const Room = db.rooms;


exports.findAll = (req, res) => {
    Room.findAll()
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
                    err.message || "Ошибка при загрузке комнат"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Room.findByPk(id)
        .then(data => {
            if (data) {
                delete data.dataValues.password;
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Не удалось найти компнату с id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ошибка при поиске компнаты с id=" + id
            });
        });
};
exports.create = (req, res) => {
    if (!req.body.name && !req.body.players_limit && !req.body.bid) {
        res.status(400).send({
            message: "Не хватает данных"
        });
        return;
    }

    // Create a Room
    console.log(req.body.password)
    const room = {
        name: req.body.name,
        players_limit: req.body.players_limit,
        bid: req.body.bid,
        locked: req.body.locked || false,
        password: bcrypt.hashSync(req.body.password, 8),
    };
    // Save Room in the database
    Room.create(room)
        .then(data => {
         //   delete data.dataValues.password;
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Какая-то ошибка при создании комнаты"
            });
        });
}

exports.checkPassword = (req, res) => {
    if (!req.body.password && !req.body.room ) {
        res.status(400).send({
            message: "Обязательное поле пароль"
        });
        return;
    }
    const id = req.body.room;
    Room.findByPk(id)
        .then(data => {
            if (data) {
                let passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    data.dataValues.password
                );

                if (!passwordIsValid) {
                    return res.status(401).send({
                        message: "Не верный пароль"
                    });
                }
                res.status(200).send({
                    message : 'Успешно вошли в комнату'
                });
            } else {
                res.status(404).send({
                    message: `Не удалось найти компнату с id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ошибка при поиске компнаты с id=" + id
            });
        });
}