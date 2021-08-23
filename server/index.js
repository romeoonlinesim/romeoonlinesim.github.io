const express = require("express");
const session = require("cookie-session");
const http = require("http");
const mongoose = require("mongoose");
const passport = require("./auth/passport");
const cors = require("cors");
const bodyParse = require("body-parser");
const flash = require("connect-flash");
const fileStore = require("session-file-store");
const config = require("./config/keys");
const app = express();
const server = http.createServer(app);
const addTeam = require("./start/addTeam");
const Competition = require("./schema/competitionSchema");
const matchAvailable = require("./competition/matchAvailable");
require('dotenv').config();
global.remainingTime = 0; //remaining time of current competition
global.cycle = 0;
global.status = false;
global.match = "";
global.matchCount = 0;

//const CLIENT_HOME_PAGE_URL = "http://localhost:5000";

//connect to mongodb
const MONGO_URI = "mongodb://127.0.0.1/romeo";
mongoose.connect(MONGO_URI, {useNewUrlParser: true});

//set up teams if needed
addTeam();

//set up session
app.use(session({
    maxAge: 365 * 24 * 60 * 60 * 1000, //no need to re-login for a year
    secret: config.secret,
    resave: true,
    saveUninitialized:true
}));

//set up cors to allow to accept requests from client
app.use(
    cors({
        origin: process.env.NODE_ENV === "production" 
                ? process.env.CLIENT_HOMEPAGE
                : "http://localhost:5000",
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
        credentials: true
    })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(flash());


//socket.io
const socketIo = require("socket.io")(server, {
    path:"/api/socket",
    cors: {
        origin: process.env.NODE_ENV === "production" 
                ? process.env.CLIENT_HOMEPAGE
                : "http://localhost:5000",
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
        credentials: true
    }
});

socketIo.on("connection", (socket) => {
    console.log("New client connected " + socket.id);

    socket.emit("getId", socket.id);

    socket.on("sendDataClient", function(data) {
        socketIo.emit("sendDataServer", {data});
    });

    // check available match every second
    var interval = setInterval(function() {
        

        Competition.findOne().sort({_id: -1})
        .then(async function(currentCompetition) {
            try {
                let liveCheck = false;
                const temp = await Promise.all([matchAvailable(currentCompetition.ongoingMatch-1)]);
                const match = temp[0];

                if (currentCompetition.ongoing === false) {
                    liveCheck = false;
                } else if (currentCompetition.ongoing === true && global.status === false) {
                    liveCheck = false;
                } else {
                    liveCheck = true;
                }

                socket.emit("liveCheckSocket", liveCheck);
            } catch (err) {
                console.log(err);
            }
        });
    }, 1000);

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    })
});

//set up routes
app.use("/api/verifyLogin", require("./routes/login"));
app.use("/api/verifyRegister", require("./routes/register"));
app.use("/api/logout", require("./routes/logout"));
app.use("/api/competition", require("./routes/competition"));
app.use("/api/recordings", require("./routes/recordings"));
app.use("/api/teams", require("./routes/teams"));

app.get("/api/authenticate", (req, res) => {
    res.send({
        authenticated: req.isAuthenticated(),
        user: req.user
    });
});

server.listen(3000, () => {
    console.log("Server listening port 3000");
})