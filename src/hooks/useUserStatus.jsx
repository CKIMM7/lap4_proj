import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import { usersActions } from '../store/usersSlice';
import { roomActions } from '../store/roomSlice';
import { v4 as uuidv4 } from 'uuid';
import { socket } from './socket';
import { Navigate, useNavigate } from 'react-router-dom';

const useUserStatus = (action) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");


    const room = useSelector(state => state.room.room);

    const createRoom = () => {
      let room = uuidv4().slice(24)
      socket.emit("create_room", room)
      navigate(`/rooms/${room}`)
  };

    const joinRoom = (room) => {
      socket.emit("join_room", room)
  };

    const sendMessage = (message, room) => {
      // console.log(message, room)
        socket.emit("send_message", { message, room });
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

        socket.on("receive_message", (data) => {
            console.log("receive_message")
            console.log(data)
            dispatch(usersActions.setMessageReceived(data.message))        
          });          

    }, [socket]);

    return { createRoom, sendMessage, setMessage, message, joinRoom }
}

export default useUserStatus;
