import { Socket, Server } from "socket.io";
import http from "http";
import express from "express";
import { join } from "path";

const app = express();
const server = http.createServer(http);
const io = new Server(server);

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log("listenenig on 30000");
});
