const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*";
    }
});

socketIo.on("connection", (socket) => {
    console.log("New client connected " + socket.id);
})

server.listen(3000, () => {
    console.log("Server listening port 3000");
})