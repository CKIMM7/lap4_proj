const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { rm } = require("fs");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 3500

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

  socket.on("join_room", (room, userId) => {
    
    console.log(`${userId} joined room: ${room}`)
    socket.join(room);
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
    console.log(indexOfRoom)
    const tempArr = roomsArray
    console.log(roomsArray)
    tempArr[indexOfRoom].users.push(userId)
    roomsArray = tempArr
    socket.emit('receive_rooms', roomsArray)
    socket.broadcast.emit('receive_rooms', roomsArray)



    //route change to this room<-
  });

  socket.on("leave_room", (room, userId) => {

    console.log(`left room: ${room}`)
    socket.leave(room);
    console.log(`${userId} left room: ${room}`)

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
    console.log(`Index: ${indexOfRoom}`)
    console.log(roomsArray[indexOfRoom].users)
    const indexOfUser= roomsArray[indexOfRoom].users.findIndex(obj => obj == userId)
    console.log(indexOfUser)
    console.log('Before')
    console.log(roomsArray)
    roomsArray[indexOfRoom].users.splice(indexOfUser, 1)
    // arr.splice(index, 1);
    if (roomsArray[indexOfRoom].users.length == 0) {
      roomsArray.splice(indexOfRoom, 1)


    }
    console.log('After')
    console.log(roomsArray)

    socket.emit('receive_rooms', roomsArray)
    socket.broadcast.emit('receive_rooms', roomsArray)

    //route change to this room<-
  });

  socket.on("send_message", (message, room) => {
    console.log("send_message")
    console.log(message)
    console.log(room)
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room.id)
    console.log(indexOfRoom)
    const tempArr = roomsArray
    tempArr[indexOfRoom].messages.push({ user: message.user, message: message.message })
    roomsArray = tempArr

    socket.emit("receive_message", message, room)
    socket.to(room.id).emit("receive_message", message, room);
  });
});

app.get('/', (req, res) => res.send('Backend server is running'))



server.listen(port, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
});
