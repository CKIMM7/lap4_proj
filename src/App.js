import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom'
import useGetGames from './hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import useUserStatus from './hooks/useUserStatus';
import { roomActions } from './store/roomSlice';
import Room from './pages/room';
import { Start, Lobby, Topic } from './pages'
import './App.css';

const socket = io.connect("http://localhost:3001");

import { Difficulty, Topic, Leaderboard } from './components'

function App() {

  const { status } = useGetGames()

  return (
    <div className="App">
      <h1>GAME</h1>
    </div>
  );
}

export default App;
