import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom'
import useGetGames from './hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';

import io from "socket.io-client";
import useUserStatus from './hooks/useUserStatus';
import { roomActions } from './store/roomSlice';
import Room from './pages/room';

import { Start, Lobby, Game } from './pages'
import './App.css';

import { Difficulty, Category, Leaderboard } from './components'

const socket = io.connect("http://localhost:3001");

function App() {

  const { status } = useGetGames()

  return (
    <Routes>
      <Route path='/' element={<Lobby />} />
      <Route path='/startgame' element={<Game />} />
      <Route path='/leaderboard' element={<Leaderboard /> } />
    </Routes>

    // <div className="App">
    //   <h1>GAME</h1>
    //   <Lobby />
    //   <Game />
    // </div>
  );
}

export default App;
