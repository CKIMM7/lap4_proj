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

  function joinRoom(room, user) {
    console.log(user)
    console.log(roomsArray)
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
    console.log(roomsArray[indexOfRoom].users)
    if (roomsArray[indexOfRoom].users.find(obj => obj.name == user.name)) return
    if (roomsArray[indexOfRoom].users.length >= 6) { console.log('Lobby is full'); return }
    socket.join(room);

    const tempArr = roomsArray

    //tempArr[indexOfRoom].users.push({username: user.username, socre: 0})
    tempArr[indexOfRoom].users.push(user)
    roomsArray = tempArr
   }


   function updateData (roomIdForHost) {


    //get updated array sent back to sender/host
    socket.emit('receive_rooms', roomsArray, roomIdForHost)

    //get updated array sent back to other
    socket.broadcast.emit('receive_rooms', roomsArray)
   }


  socket.on("create_room", async (data, user, game) => {
    //update the array
    roomsArray.push(data);

    console.log(user)

    let searchUrl = `https://opentdb.com/api.php?amount=10&category=${game.category}&difficulty=${game.difficulty}&type=${game.choice}`
    const response = await axios.get(searchUrl);
    const gameArray = response.data.results

    let newGameArray = gameArray.map((q) => {
      //console.log(q)
      { return { ...q, answered: [] } }
    })

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == data.id)
    let tempArr = roomsArray

    console.log(`indexOfRoom: ${indexOfRoom}`)

    tempArr[indexOfRoom].game = newGameArray;
    tempArr[indexOfRoom].users.push(user)

    roomsArray = tempArr

    console.log(roomsArray);

    joinRoom(data.id, user)
    
    updateData(data.id)
    
  });

  //get_rooms{}

  socket.on("get_rooms", () => {
    console.log('get_rooms');
    socket.emit('receive_rooms', roomsArray)
  });

  socket.on("join_room", (room, user) => {

    joinRoom(room, user)

    updateData()

  });

  socket.on("leave_room", (room, user) => {

    socket.leave(room);
    console.log(`${user} left room: ${room}`)

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)

    if (!roomsArray[indexOfRoom].users.find(obj => obj.name == user)) return


    const indexOfUser= roomsArray[indexOfRoom].users.findIndex(obj => obj.name == user)
    
    console.log(user)
    console.log(indexOfUser)
    console.log(roomsArray[indexOfRoom].users)
    console.log(roomsArray[indexOfRoom].users[indexOfUser])
    roomsArray[indexOfRoom].users.splice(indexOfUser, 1)

    if (roomsArray[indexOfRoom].users.length == 0) {
      roomsArray.splice(indexOfRoom, 1)
    }
    console.log(roomsArray)

    updateData()

  });

  socket.on("send_message", (message, room) => {
    console.log("send_message")
    console.log(message)
    socket.to(message.room).emit("receive_message", message);
  });


  socket.on("send_message", (message, room) => {

    console.log('Room')
    console.log(room)
    console.log('Array')
    console.log(roomsArray)
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room.id)
    console.log(indexOfRoom)
    const tempArr = roomsArray
    tempArr[indexOfRoom].messages.push({ user: message.user, message: message.message })
    roomsArray = tempArr

    socket.emit("receive_message", message, room)
    socket.to(room.id).emit("receive_message", message, room);
  });

  socket.on("update_game", (data, user, answer) => {
    console.log('update_game');
    console.log(user);
    //console.log(answer);
    //find id of the room,
    let findIndex = roomsArray.findIndex(obj => obj.id == data.id)
    //console.log(findIndex)
    //console.log(roomsArray[findIndex].game[0])
    console.log(roomsArray[findIndex].game[0].answered)
    console.log(answer)
    
    if (answer) {
      let userIndex = roomsArray[findIndex].users.findIndex(obj => obj.name == user)
      console.log(userIndex)
      roomsArray[findIndex].users[userIndex].score += 10
    }
    if (roomsArray[findIndex].game[0].answered.length == roomsArray[findIndex].users.length) {
      console.log("Next question")
      roomsArray[findIndex].game.shift()
      updateData()
      return
    }
    if (!roomsArray[findIndex].game[0].answered.includes(user)) {
      roomsArray[findIndex].game[0].answered.push(user)
    }
    //console.log(roomsArray[findIndex].game[0])
    
    updateData()
  });

  socket.on("ready", (room, user) => {
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
    const indexOfUser = roomsArray[indexOfRoom].users.findIndex(obj => obj.name == user)
    roomsArray[indexOfRoom].users[indexOfUser].isReady = true
    if (!roomsArray[indexOfRoom].users.find(obj => obj.isReady == false)) {
      console.log('Start Game')
      socket.emit("start", room)
      socket.to(room).emit("start", room)
    }
    updateData()

  })

  // socket.on("start", (room) => {
  //   socket.emit("start", room)
  //   socket.to(room.id).emit("start", room);
  // })
});
const port = process.env.PORT || 3500

server.listen(port, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
});
