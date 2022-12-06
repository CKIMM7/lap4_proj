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

const port = process.env.PORT || 3500

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

    tempArr[indexOfRoom].users.push(user)
    roomsArray = tempArr
   }

   function updateData () {
    //get updated array sent back to sender/host
    socket.emit('receive_rooms', roomsArray)

    //get updated array sent back to other
    socket.broadcast.emit('receive_rooms', roomsArray)
   }

  socket.on("create_room", (data, user) => {
    //update the array
    roomsArray.push(data);
    console.log('hey')
    console.log(user)

    joinRoom(data.id, user)
    
    updateData()
    
  });

  //get_rooms

  socket.on("get_rooms", () => {
    console.log('get_rooms');
    console.log(roomsArray);
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

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room.id)

    const tempArr = roomsArray
    tempArr[indexOfRoom].messages.push({ user: message.user, message: message.message })
    roomsArray = tempArr

    socket.emit("receive_message", message, room)
    socket.to(room.id).emit("receive_message", message, room);
  });

  socket.on("ready", (room, user) => {
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == room)
    const indexOfUser = roomsArray[indexOfRoom].users.findIndex(obj => obj.name == user)
    roomsArray[indexOfRoom].users[indexOfUser].isReady = true
    if (!roomsArray[indexOfRoom].users.find(obj => obj.isReady == false)) {
      console.log('Start Game')
      socket.emit("start", 'room')
      socket.to(room).emit("start", 'room')
    }
    

  })

  // socket.on("start", (room) => {
  //   socket.emit("start", room)
  //   socket.to(room.id).emit("start", room);
  // })
});

app.get('/', (req, res) => res.send('Backend server is running'))



server.listen(port, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
});
