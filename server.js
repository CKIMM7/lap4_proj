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

  function joinRoom(room, userId) {
    socket.join(room);
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)

    const tempArr = roomsArray

    tempArr[indexOfRoom].users.push(userId)
    roomsArray = tempArr
   }

   function updateData () {
    //get updated array sent back to sender/host
    socket.emit('receive_rooms', roomsArray)

    //get updated array sent back to other
    socket.broadcast.emit('receive_rooms', roomsArray)
   }

  socket.on("create_room", (data, userId) => {
    console.log("create_room")
    console.log(data)

    //update the array
    roomsArray.push(data);

    console.log('roomsArray');
    console.log(roomsArray);
    const room = data.id
    joinRoom(data.id, userId)
    
    updateData()
    
  });

  //get_rooms

  socket.on("get_rooms", (data, callBack) => {
    console.log('get_rooms');
    console.log(roomsArray);
    socket.emit('receive_rooms', roomsArray)
  });

  socket.on("join_room", (room, userId) => {

    joinRoom(room, userId)

    updateData()

  });

  socket.on("leave_room", (room, userId) => {

    socket.leave(room);
    console.log(`${userId} left room: ${room}`)

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)

    if (!roomsArray[indexOfRoom].users.includes(userId)) return


    const indexOfUser= roomsArray[indexOfRoom].users.findIndex(obj => obj == userId)

    roomsArray[indexOfRoom].users.splice(indexOfUser, 1)

    if (roomsArray[indexOfRoom].users.length == 0) {
      roomsArray.splice(indexOfRoom, 1)
    }

    updateData()

  });

  socket.on("send_message", (message, room) => {

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room.id)

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
