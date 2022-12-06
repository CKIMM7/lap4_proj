import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../store/usersSlice';
import { roomActions } from '../store/roomSlice';
import { v4 as uuidv4 } from 'uuid';
import { socket } from './socket';
import { useNavigate } from 'react-router-dom';

const useUserStatus = (action) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");


    const room = useSelector(state => state.room.room);

  const createRoom = () => {
    let room = {
      id: uuidv4().slice(24),
      users: [],
      messages: [
        {
          user: 'Admin',
          message: 'Welcome to the chat room!'
        }
      ]
    }
      socket.emit("create_room", room, { name: socket.id, isReady: false })
  };

  const joinRoom = (room) => {
    console.log(`${socket.id} has joined room: ${room.id}`)
      socket.emit("join_room", room.id, { name: socket.id, isReady: false })
  };

  const leaveRoom = (room) => {
    console.log(`${socket.id} has left room: ${room.id}`)
    socket.emit("leave_room", room.id, socket.id)
  };

  const readyUp = (room, user) => {
    socket.emit("ready", room, user)
  }

  const sendMessage = (message, room) => {
    // console.log(message, room)
    console.log(room)

    socket.emit("send_message", { user: socket.id, message: message }, room );
  };

    
    useEffect(() => {
        socket.off().on('connect', function() {
          console.log(`${socket.id} connected`)
          dispatch(usersActions.setUser(socket.id))
          socket.emit("get_rooms");
        });

        socket.on("receive_rooms", (data) => {
            dispatch(roomActions.setRoom(data))              
          })

        socket.on("receive_message", (data, room) => {
            console.log("receive_message")
            console.log(data)
          console.log(room)
          data.room = room.id
            dispatch(roomActions.setMessage(data, room))        
        });          
        
        socket.on("start", (room) => {
            navigate('/game')
        })

    }, [socket]);

    return { createRoom, sendMessage, setMessage, message, joinRoom, leaveRoom, readyUp }
}

export default useUserStatus;
