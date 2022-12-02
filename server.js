const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let roomsArray = [];

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("create_room", (data) => {
    console.log("create_room")
    console.log(data)

    //update the array
    roomsArray.push(data);

    console.log('roomsArray');
    console.log(roomsArray);

    //get updated array sent back to sender/host
    socket.emit('receive_rooms', roomsArray)

    //get updated array sent back to other
    socket.broadcast.emit('receive_rooms', roomsArray)
  });

  //get_rooms

  socket.on("get_rooms", (data, callBack) => {
    console.log('get_rooms');
    console.log(roomsArray);
    socket.emit('receive_rooms', roomsArray)
  });

  socket.on("join_room", (room) => {
    
    console.log(`joined room: ${room}`)
    socket.join(room);
    //route change to this room<-
  });

  socket.on("send_message", (message, room) => {
    console.log("send_message")
    console.log(message)
    socket.to(message.room).emit("receive_message", message);
  });
});

app.get('/', (req, res) => res.send('Backend server is running'))

server.listen(process.env.PORT || 3001, () => {
  console.log("SERVER IS RUNNING ON http://localhost:3001");
});
