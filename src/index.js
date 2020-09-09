import express from "express";
import serv from "http";
import socket from "socket.io";
import userRouter from './routes/userRoutes.js'
import bodyParser from 'body-parser'

let app = express();
let server = serv.createServer(app);
let io = socket.listen(server);

app.use(bodyParser.json())

app.use('/users',userRouter)

app.listen(3000, () => {
    console.log("its works");
});





