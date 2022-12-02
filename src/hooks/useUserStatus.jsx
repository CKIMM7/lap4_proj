import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import { usersActions } from '../store/usersSlice';
import { roomActions } from '../store/roomSlice';
import { v4 as uuidv4 } from 'uuid';
import { socket } from './socket';


//const socket = io.connect("http://localhost:3001");

const useUserStatus = (action) => {

    //console.log(counter)
    //const [userHookstatus, setStatus] = useState(true)
    const dispatch = useDispatch()
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const room = useSelector(state => state.room.room);
    
    const createRoom = () => {
      let room = uuidv4().slice(24)
      socket.emit("create_room", room)
      dispatch(roomActions.setRoom(room))
  };

    const joinRoom = (room) => {
      socket.emit("join_room", room)
  };

    const sendMessage = (message, room) => {
      console.log(message, room)
        socket.emit("send_message", { message, room });
      };  
    
    useEffect(() => {

        socket.on('connect', function() {
          console.log(socket.id)
          dispatch(usersActions.setUser(socket.id))
        });

        socket.on("receive_rooms", (data) => {
            console.log("receive_rooms")
            dispatch(roomActions.setRoom(data))              
          });

        socket.on("receive_message", (data) => {
            console.log("receive_message")
            console.log(data)         
          });          

    }, [socket]);

    return { createRoom, sendMessage, messageReceived, setMessageReceived, setMessage, message, joinRoom }
}

export default useUserStatus;
