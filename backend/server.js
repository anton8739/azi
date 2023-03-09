const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app);

let corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const initial = require("./app/config/db.init");
db.sequelize.sync().then(() => {
    console.log('Drop and Resync Db');
    // initial();
});;

app.get("/", (req, res) => {
    res.json({ message: "Welcome to azi application." });
});

require("./app/routes/user.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/room.routers")(app);
require("./app/websocket/index")(server);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});