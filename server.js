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

let roomsArray = []
let userArray = []

io.on("connection", (socket) => {

  console.log(`User Connected: ${socket.id}`);

  function joinRoom(room, user) {
    // console.log(user)
    // console.log(roomsArray)
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
    console.log(roomsArray[indexOfRoom].users)
    if (roomsArray[indexOfRoom].users.find(obj => obj.name == user.name)) return
    if (roomsArray[indexOfRoom].users.length >= 6) { console.log('Lobby is full'); return }
    socket.join(room);

    console.log("Test")
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

    roomsArray = tempArr

    // console.log(roomsArray);

    console.log('before')
    joinRoom(data.id, user)
    console.log('after')

    
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

  // socket.on("send_message", (message, room) => {
  //   console.log("send_message")
  //   console.log(message)
  //   socket.to(message.room).emit("receive_message", message);
  // });


  socket.on("send_message", (message, room) => {

    console.log('Room')
    console.log(room)
    console.log('message')
    console.log(message)
    console.log('Array')
    console.log(roomsArray)
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room.id)
    console.log(indexOfRoom)
    const tempArr = roomsArray
    tempArr[indexOfRoom].messages.push({ user: message.user, message: message.message })
    roomsArray = tempArr

    socket.emit("receive_message", message, room)
    socket.to(room.id).emit("receive_message", message, room);
    updateData()
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
    updateCountdown(10, roomsArray[findIndex].id, findIndex, user)
    updateData()
  });

  // socket.on("ready", (room, user) => {
  //   const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
  //   const indexOfUser = roomsArray[indexOfRoom].users.findIndex(obj => obj.name == user)
  //   roomsArray[indexOfRoom].users[indexOfUser].isReady = true
  //   if (!roomsArray[indexOfRoom].users.find(obj => obj.isReady == false)) {
  //     console.log('Start Game')
  //     socket.emit("start", room)
  //     socket.to(room).emit("start", room)
  //   }
  //   updateData()

  // })

  function updateCountdown(seconds, room, indexOfRoom, user) {
    const setIntervalId = setInterval(function () {
      seconds--;
      console.log(seconds)
      socket.emit("receive_countdown", seconds, room)
      socket.to(room).emit("receive_countdown", seconds, room);
      console.log(roomsArray[indexOfRoom])
      if (roomsArray[indexOfRoom].game.length > 0 && roomsArray[indexOfRoom].game[0].answered.length == roomsArray[indexOfRoom].users.length) {
        socket.emit("receive_countdown", 10, room)
        socket.to(room).emit("receive_countdown", 10, room);

        clearInterval(setIntervalId)
        updateData()
      }
      if (seconds == 0) {
        //set everyone's 'answered' property to be true and count reaches 0
        //and get current question
        roomsArray[indexOfRoom].game.shift()
        //return the updated array
        updateData()
        clearInterval(setIntervalId)
        seconds = 10

        if (roomsArray[indexOfRoom].game.length == 0) {
          console.log('end of game')
          console.log(`clean up users`)
          return;

        } else {

          console.log(roomsArray.length);
          socket.emit("ready_again", room, user)
        }

      }
    }, 1000);
  }

  socket.on("ready", (room, user) => {
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
    const indexOfUser = roomsArray[indexOfRoom].users.findIndex(obj => obj.name == user)
    roomsArray[indexOfRoom].users[indexOfUser].isReady = true

    console.log(roomsArray[indexOfRoom].users)
    if (!roomsArray[indexOfRoom].users.find(obj => obj.isReady == false)) {
      socket.emit("test")
      console.log("Inside Users")
      console.log(roomsArray[indexOfRoom].users)
      let countdown = 10;
      console.log('Start Game')
      console.log('User:')
      console.log(user)
      // socket.emit("start", 'room')
      // socket.to(room).emit("start", 'room')
      //call timer here
      console.log(`room inside ready`)
      console.log(room)
      updateCountdown(10, room, indexOfRoom, user)
      
    }
    updateData()
  })

  socket.on('create_user', (user) => {
    console.log(user)
    userArray.push(user)
    socket.emit('receive_user', userArray)

    //get updated array sent back to other
    socket.broadcast.emit('receive_user', userArray)
  })

});
const port = process.env.PORT || 3500

server.listen(port, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
});
