const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const passport = require("./auth/passport");
const cors = require("cors")
const app = express();
const server = http.createServer(app);

//connect to mongodb
const MONGO_URI = "mongodb://127.0.0.1/romeo";
mongoose.connect(MONGO_URI, {useNewUrlParser: true});

//initialize passport
app.use(passport.initialize());

//set up cors to allow to accept requests from client
app.use(
    cors({
        origin: "http://localhost:3001",
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
        credentials: true
    })
)

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