import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../store/usersSlice';
import { roomActions } from '../store/roomSlice';
import { v4 as uuidv4 } from 'uuid';
import { socket } from './socket';
import { Navigate, useNavigate } from 'react-router-dom';
import { gamesActions } from '../store/store';

const useUserStatus = (action) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");


    const room = useSelector(state => state.room.room);

  const createRoom = () => {

    //socket.emit("create_room", room, socket.id)
    navigate(`/createlobby`)
  };

  const joinRoom = (room) => {
    console.log(`room`)
    console.log(`${socket.id} has joined room: ${room.id}`)
    socket.emit("join_room", room.id, socket.id)
  };

  const leaveRoom = (room) => {
    console.log(`${socket.id} has left room: ${room.id}`)
    socket.emit("leave_room", room.id, socket.id)
  };


  const sendMessage = (message, room) => {
    // console.log(message, room)
    console.log(room)

    socket.emit("send_message", { user: socket.id, message: message }, room );
  };
      
    const broadCastGame = (game) => {
        console.log(game)

        let id = uuidv4().slice(24)

        let room = {
          id: id,
          users: [],
          messages: [
            {
              user: 'Admin',
              message: 'Welcome to the chat room!'
            }
          ],
          game: []
        }

        socket.emit("create_room", room, socket.id, game)
        navigate(`/lobby/${room.id}`)
      };

    
    useEffect(() => {
        socket.off().on('connect', function() {
          console.log(`${socket.id} connected`)
          dispatch(usersActions.setUser(socket.id))
          socket.emit("get_rooms");
        });

        socket.on("receive_rooms", (data) => {
            console.log(data);
            dispatch(roomActions.setRoom(data))              
          })

        socket.on("receive_message", (data, room) => {
            console.log("receive_message")
            console.log(data)         
          });

          // socket.on("receive_game", (data, room) => {
          //   console.log("receive_game")
          //   console.log(data)
          //   dispatch(gamesActions.setGamesData(data))

          // });

    }, [socket]);

    return { createRoom, sendMessage, messageReceived, setMessageReceived, setMessage, message, joinRoom, broadCastGame }
}

export default useUserStatus;
