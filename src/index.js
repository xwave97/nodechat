import express from "express";
import serv from "http";
import socket from "socket.io";

let app = express();
let server = serv.createServer(app);
let io = socket.listen(server);

server.listen(3000, () => {
    console.log("its works");
});





