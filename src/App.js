import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Start, CreateLobby, Game } from './pages'


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
     <Route path="/joinorcreate" element={<LobbyCode/>}></Route>
     <Route path="/createlobby" element={<CreateLobby/>}></Route>

     <Route path='/startgame' element={<Game />} />
      <Route path='/difficulty' element={<Difficulty /> } />
     </Routes>

)}


export default App;
