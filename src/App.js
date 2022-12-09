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
               <Route path="/" element={<Start />}></Route>
               <Route path="/createlobby" element={<CreateLobby />}></Route>

               <Route path="/lobby" element={<LobbyCode />}></Route>
               <Route path="/lobby/:id" element={<Game />}></Route>

               <Route path="/room/:id" element={<Ready />}></Route>

               <Route path='/gameEnd' element={<GameEnd />} />
          </Routes>

     )
}


export default App;
