const express = require("express");
const session = require("express-session");
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

//connect to mongodb
const MONGO_URI = "mongodb://127.0.0.1/romeo";
mongoose.connect(MONGO_URI, {useNewUrlParser: true});

//set up session
app.use(session({
    maxAge: 365 * 24 * 60 * 60 * 1000, //no need to re-login for a year
    secret: config.secret,
    saveUninitialized:true
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json({extended:true}));



//set up cors to allow to accept requests from client
app.use(
    cors({
        origin: "http://localhost:3001",
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
        credentials: true
    })
);

app.use(flash());

//set up routes
app.use("/verifyLogin", require("./routes/login"));
app.use("/verifyRegister", require("./routes/register"));

app.get("/authenticate", (req, res) => {
    console.log(req.isAuthenticated);
    res.send({
        authenticated: req.isAuthenticated(),
        user: req.user
    });
})


/*const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});

socketIo.on("connection", (socket) => {
    console.log("New client connected " + socket.id);

    socket.emit("getId", socket.id);

    socket.on("sendDataClient", function(data) {
        socketIo.emit("sendDataServer", {data});
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    })
})*/

server.listen(3000, () => {
    console.log("Server listening port 3000");
})