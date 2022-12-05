import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import useGetGames from './hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';

import Room from './pages/room';
import useUserStatus from './hooks/useUserStatus';
import { roomActions } from './store/roomSlice';
import CreateRoom from './pages/createRoom';
import GameSettings from './pages/gameSettings';
import Nav from './pages/navBar';
import GameRoom from './pages/gameRoom';
import { Start, Lobby, Game } from './pages'

import './App.css';
import "nes.css/css/nes.min.css";


// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");


import { Difficulty, Category, Leaderboard, LobbyCode } from './components'

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
     <Route path='/startgame' element={<Game />} />
      <Route path='/leaderboard' element={<Leaderboard /> } />
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
