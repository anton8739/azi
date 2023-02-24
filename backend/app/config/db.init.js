const db = require("../models");
const Role = db.roles;
const User = db.users;
const Room = db.rooms;
function initial() {
    /*init roles*/
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "admin"
    });
    /*init users*/
    User.create({
        username: "Anton",
        email: "anton3.ru@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 11000,
        active: true,
        roleId: 2,
        mute: false,
    });
    User.create({
        username: "Maks",
        email: "maks@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 12000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Pavel",
        email: "pavel@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 13000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Ivan",
        email: "ivan@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 14000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Petr",
        email: "petr@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 15000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Anton1",
        email: "anton6.ru@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 11000,
        active: true,
        roleId: 2,
        mute: false,
    });
    User.create({
        username: "Maks1",
        email: "maks7@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 12000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Pavel1",
        email: "pavel8@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 13000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Ivan1",
        email: "ivan1@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 14000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Petr10",
        email: "petr@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 15000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Anton2",
        email: "anton11.ru@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 11000,
        active: true,
        roleId: 2,
        mute: false,
    });
    User.create({
        username: "Maks2",
        email: "maks12@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 12000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Pavel2",
        email: "pavel13@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 13000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Ivan2",
        email: "ivan2@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 14000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Petr2",
        email: "petr2@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 15000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Anton3",
        email: "anton3.r3u@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 11000,
        active: true,
        roleId: 2,
        mute: false,
    });
    User.create({
        username: "Maks25",
        email: "maks17@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 12000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Pavel124",
        email: "pavel7@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 13000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Ivan3",
        email: "ivan3@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 14000,
        active: true,
        roleId: 1,
        mute: false,
    });
    User.create({
        username: "Petr3",
        email: "petr3@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 0,
        games: 0,
        balance: 15000,
        active: true,
        roleId: 1,
        mute: false,
    });
    /*init rooms*/
    Room.create({
        name: "Комната №1",
        bid: 100,
        players_limit: 4,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №2",
        bid: 200,
        players_limit: 5,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №3",
        bid: 300,
        players_limit: 6,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №4",
        bid: 100,
        players_limit: 4,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №5",
        bid: 200,
        players_limit: 5,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №6",
        bid: 300,
        players_limit: 6,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №7",
        bid: 100,
        players_limit: 4,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString(),
        locked: true,
    });
    Room.create({
        name: "Комната №8",
        bid: 200,
        players_limit: 5,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №9",
        bid: 300,
        players_limit: 6,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString(),
        locked: true,
    });
    Room.create({
        name: "Комната №10",
        bid: 100,
        players_limit: 4,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №11",
        bid: 200,
        players_limit: 5,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №12",
        bid: 300,
        players_limit: 6,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №13",
        bid: 100,
        players_limit: 4,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №14",
        bid: 200,
        players_limit: 5,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №15",
        bid: 300,
        players_limit: 6,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №16",
        bid: 100,
        players_limit: 4,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №17",
        bid: 200,
        players_limit: 5,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №18",
        bid: 300,
        players_limit: 6,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №19",
        bid: 100,
        players_limit: 4,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №20",
        bid: 200,
        players_limit: 5,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №21",
        bid: 300,
        players_limit: 6,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №22",
        bid: 100,
        players_limit: 4,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №23",
        bid: 200,
        players_limit: 5,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
    Room.create({
        name: "Комната №24",
        bid: 300,
        players_limit: 6,
        connected_players: 0,
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        last_active_date: new Date().toISOString()
    });
}
module.exports = initial;