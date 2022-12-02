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

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on('send_message', data => {
//     console.log('data');
//     console.log(data);

//     socket.broadcast.emit('receive_message', data)

//   })

// });

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("create_room", (data) => {
    console.log("create_room")
    console.log(data)

    socket.broadcast.emit('receive_rooms', data)
  });

  socket.on("get_rooms", (data) => {
    socket.broadcast.emit('receive_rooms', data)
  })

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




server.listen(3001, () => {
  console.log("SERVER IS RUNNING ON http://localhost:3001");
});
