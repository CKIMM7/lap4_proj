import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Start, CreateLobby, Game, GameEnd } from './pages'


import './App.css';
import "nes.css/css/nes.min.css";


// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");


import { Difficulty, Category, Leaderboard, LobbyCode } from './components'
import Ready from './components/Ready';

function App() {


return (
     <Routes>
     <Route path="/" element={<Start/>}></Route>
<<<<<<< HEAD
     <Route path="/Lobby" element={"<Lobby/>"}></Route>
     <Route path='/lobby/:id' element={<LobbyCode/> } />
     <Route path="/Topic" element={"<Topic/>"}></Route>
     <Route path='/startgame' element={<Game />} />
      <Route path='/leaderboard' element={<Leaderboard /> } />
    <Route path="/room/:id" element={<Ready />}></Route>
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
=======
     <Route path="/createlobby" element={<CreateLobby/>}></Route>
     
     <Route path="/lobby" element={<LobbyCode/>}></Route>
     <Route path="/lobby/:id" element={<Game/>}></Route>

      <Route path="/room/:id" element={<Ready />}></Route>

      <Route path='/gameEnd' element={<GameEnd /> } />
     </Routes>

)}
>>>>>>> game


export default App;
