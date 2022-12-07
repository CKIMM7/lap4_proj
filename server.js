const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const axios = require("axios")

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

  function joinRoom(room, userId) {

    console.log(roomsArray);
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


  socket.on("create_room", async (data, userId, game) => {
    //update the array


    roomsArray.push(data);

    let searchUrl = `https://opentdb.com/api.php?amount=${game.num}&category=${game.category}&difficulty=${game.difficulty}&type=${game.choice}`
    const response = await axios.get(searchUrl);
    const gameArray = response.data.results
    //console.log(response);

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == data.id)
    let tempArr = roomsArray

    console.log(`indexOfRoom: ${indexOfRoom}`)

    tempArr[indexOfRoom].game.push(gameArray)
    roomsArray = tempArr

    console.log(roomsArray);

    joinRoom(data.id, userId)
    
    updateData()
    
  });

  //get_rooms{}

  socket.on("get_rooms", () => {
    console.log('get_rooms');

    console.log(roomsArray)
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


  // socket.on("broadcast_game", async (game, room) => {

  //   let searchUrl = `https://opentdb.com/api.php?amount=${game.num}&category=${game.category}&difficulty=${game.difficulty}&type=${game.choice}`
  //   const response = await axios.get(searchUrl);
  //   const gameArray = response.data.results
  //   //console.log(response);

  //   const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
  //   let tempArr = roomsArray


  //   tempArr[indexOfRoom].game.push(gameArray)
  //   roomsArray = tempArr

  //   console.log(`broadcast_game: roomsArray`)
  //   //console.log(roomsArray[0].game)

  //   socket.emit("receive_game", gameArray, room)
  //   //socket.to(room.id).emit("receive_game", gameArray, room);

  // });

});
const port = process.env.PORT || 3500

server.listen(port, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
});
