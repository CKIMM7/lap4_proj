import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom'
import useGetGames from './hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import useUserStatus from './hooks/useUserStatus';
import { roomActions } from './store/roomSlice';
import Room from './pages/room';
import { Start, Lobby, ChooseTopic } from './pages'

const socket = io.connect("http://localhost:3001");

function App() {

  const dispatch = useDispatch();
  const { status } = useGetGames(10, 11, 'easy', 'multiple')

  const { createRoom, sendMessage, setRoom, setMessage, messageReceived,  } = useUserStatus();

  const userData = useSelector(state => state.user.user);
  const roomsArray = useSelector(state => state.room.room);

  let createdRooms = roomsArray.map((r,i) => {
      return <Room data={r} key={i}></Room>
  })

  useEffect(() => {
    console.log(roomsArray)


  }, [roomsArray])

return (

  <div className="App">
      <h2>user: {socket.id}</h2>
      {/* <input
        placeholder="Room Number..."
        onChange={(event) => {
          dispatch(roomActions.setRoom(event.target.value));
        }}  
      /> */}
      <button onClick={createRoom}> Create Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messageReceived}
      {createdRooms}
    </div>
)}

export default App;
