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
        id: 1,
        username: "Anton",
        email: "anton3.ru@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 145,
        games: 13,
        balance: 11000,
        locked: true,
        active: true,
        roleId: 2,
        mute: false,
    });
    User.create({
        id: 2,
        username: "Maks",
        email: "maks@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 211,
        games: 7,
        balance: 12000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 3,
        username: "Pavel",
        email: "pavel@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 18,
        games: 34,
        balance: 13000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 4,
        username: "Ivan",
        email: "ivan@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 342,
        games: 42,
        balance: 14000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 5,
        username: "Petr",
        email: "petr@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 507,
        games: 11,
        balance: 15000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 6,
        username: "Anton1",
        email: "anton6.ru@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 242,
        games: 241,
        balance: 11000,
        locked: true,
        active: true,
        roleId: 2,
        mute: false,
    });
    User.create({
        id: 7,
        username: "Maks1",
        email: "maks7@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 45,
        games: 345,
        balance: 12000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 8,
        username: "Pavel1",
        email: "pavel8@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 215,
        games: 245,
        balance: 13000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 9,
        username: "Ivan1",
        email: "ivan1@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 968,
        games: 235,
        balance: 14000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 10,
        username: "Petr10",
        email: "petr@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 124,
        games: 124,
        balance: 15000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 11,
        username: "Anton2",
        email: "anton11.ru@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 244,
        games: 153,
        balance: 11000,
        locked: true,
        active: true,
        roleId: 2,
        mute: false,
    });
    User.create({
        id: 12,
        username: "Maks2",
        email: "maks12@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 34,
        games: 23,
        balance: 12000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 13,
        username: "Pavel2",
        email: "pavel13@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 53,
        games: 75,
        balance: 13000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 14,
        username: "Ivan2",
        email: "ivan2@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 353,
        games: 24,
        balance: 14000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 15,
        username: "Petr2",
        email: "petr2@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 314,
        games: 52,
        balance: 15000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 16,
        username: "Anton3",
        email: "anton3.r3u@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 53,
        games: 257,
        balance: 11000,
        locked: true,
        active: true,
        roleId: 2,
        mute: false,
    });
    User.create({
        id: 17,
        username: "Maks25",
        email: "maks17@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 256,
        games: 24,
        balance: 12000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 18,
        username: "Pavel124",
        email: "pavel7@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 23,
        games: 122,
        balance: 13000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 19,
        username: "Ivan3",
        email: "ivan3@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 324,
        games: 12,
        balance: 14000,
        active: true,
        roleId: 1,
        locked: true,
        mute: false,
    });
    User.create({
        id: 20,
        username: "Petr3",
        email: "petr3@mail.ru",
        password: "$2a$08$u6MMXpeFA4ouadXpgP2XD.GOq.wSKs68u03u9VslicHrkbl/aeIbW",
        score: 247,
        games: 67,
        balance: 15000,
        active: true,
        roleId: 1,
        locked: true,
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