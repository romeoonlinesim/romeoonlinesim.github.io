const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*";
    }
})

server.listen(3000, () => {
    console.log("Server listening port 3000");
})