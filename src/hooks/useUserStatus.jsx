import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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


  const st = useSelector(state => state.user.users);
  const room = useSelector(state => state.room.room);

  const readyUp = (room, user) => {
    socket.emit("ready", room, user)
  }
  
  const updateQuestionStatus = (game, answer) => {
    console.log(answer)
    socket.emit("update_game", game, socket.id, answer);
  }

    
  const joinRoom = (room) => {
    console.log(`room`)
    console.log(`${socket.id} has joined room: ${room.id}`)
      socket.emit("join_room", room.id, { name: socket.id, isReady: false, score: 0 })
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
          messages: [],
          game: []
        }

        socket.emit("create_room", room, { name: socket.id, isReady: false, score: 0 }, game)
        console.log('create_room took place')
  };
  
  function createUser(user) { 
    socket.emit("create_user", user)
  }

    
    useEffect(() => {

      console.log('useeffect useUserStatus')

        socket.off().on('connect', function() {
          console.log(`${socket.id} connected`)
          // dispatch(usersActions.setUser(socket.id))
          socket.emit("get_rooms");
        });

        socket.on("receive_rooms", (data, roomIdForHost) => {
            console.log(data);
            dispatch(roomActions.setRoom(data))

            if(roomIdForHost)  {
              navigate(`/lobby/${roomIdForHost}`, {state: { userId: socket.id }})
            }            
          })

        socket.on("receive_message", (data, room) => {
            console.log("receive_message")
            console.log(data)
          console.log(room)
          data.room = room.id
            dispatch(roomActions.setMessage(data, room))        
        });          
        
      socket.on("receive_countdown", (data, room) => {
        console.log("receive_countdown")
        let countData = { count: data, room: room }
        console.log(countData)
        dispatch(roomActions.setCountDown(countData))
      });

      socket.on("ready_again", (room, user) => {
        console.log("ready_again")
        socket.emit("ready", room, user)
      })

      socket.on("receive_user", (data) => {
        console.log(data)
        dispatch(usersActions.setUser(data))
        console.log(st)
      })

      socket.on("test", () => {
        console.log("Connected to IF")
      })

    }, [socket]);

    return { sendMessage, setMessage, message, joinRoom, leaveRoom, broadCastGame, readyUp, updateQuestionStatus, createUser }
}

export default useUserStatus;
