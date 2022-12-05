import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

import useGetGames from './hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import useUserStatus from './hooks/useUserStatus';
import { roomActions } from './store/roomSlice';
import Room from './pages/room';
import { Start, Lobby, Topic } from './pages'
import './App.css';

// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");


import { Difficulty, Topic, Leaderboard } from './components'

function App() {

  

  // useEffect(() => {
  //   console.log(roomsArray)

  // }, [roomsArray])

return (
     <Routes>
     <Route path="/" element={<Start/>}></Route>
     <Route path="/Lobby" element={"<Lobby/>"}></Route>
     <Route path='/lobby/:id' element={<LobbyCode/> } />
     <Route path="/Topic" element={"<Topic/>"}></Route>
     </Routes>
  // <div className="App">
  //     <h2>user: {socket.id}</h2>
  //     {/* <input
  //       placeholder="Room Number..."
  //       onChange={(event) => {
  //         dispatch(roomActions.setRoom(event.target.value));
  //       }}  
  //     /> */}
  //     <button onClick={createRoom}> Create Room</button>
  //     <input
  //       placeholder="Message..."
  //       onChange={(event) => {
  //         setMessage(event.target.value);
  //       }}
  //     />
  //     <button onClick={sendMessage}> Send Message</button>
  //     <h1> Message:</h1>
  //     {messageReceived}
  //     {createdRooms}
  //   </div>
)}
//   const { status, category, difficulty } = useGetGames()

//   return (
//     <div className="App">
//       <h1>GAME</h1>
//       <Difficulty level={difficulty} />
//       <Topic topic={category} />
//       <Leaderboard />
//     </div>
//   );
// }

export default App;
