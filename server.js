const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
//const axios = require("axios")

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  function joinRoom(room, userId) {

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
    if (roomsArray[indexOfRoom].users.includes(userId)) return
    socket.join(room);

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
    //update the array
    roomsArray.push(data);

    joinRoom(data.id, userId)
    
    updateData()
    
  });

  //get_rooms{}

  socket.on("get_rooms", (data, callBack) => {
    console.log('get_rooms');
    console.log(roomsArray);
    socket.emit('receive_rooms', roomsArray)
  });

  socket.on("join_room", (room, userId) => {

    joinRoom(room, userId)

    updateData()

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


  socket.on("send_message", (message, room) => {

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room.id)

    const tempArr = roomsArray
    tempArr[indexOfRoom].messages.push({ user: message.user, message: message.message })
    roomsArray = tempArr

    socket.emit("receive_message", message, room)
    socket.to(room.id).emit("receive_message", message, room);
  });


  socket.on("broadcast_game", (game, room) => {

    //axios.get(gameamount, category, difficulty, type)

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
    console.log(indexOfRoom);
    const tempArr = roomsArray

    // tempArr[indexOfRoom].game.push(game)
    // roomsArray = tempArr

    // socket.emit("receive_game", game, room)
    // socket.to(room.id).emit("receive_game", game, room);
  });

});


server.listen(3001, () => {
  console.log("SERVER IS RUNNING ON http://localhost:3001");
});
