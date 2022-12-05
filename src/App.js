import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LobbyCode from './components/LobbyCode';

// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");

function App() {

  

  // useEffect(() => {
  //   console.log(roomsArray)

  // }, [roomsArray])


  return (
    <Routes>
      <Route path='/' element={<h1>Welcome to the quiz</h1>} />
      <Route path='/lobby/:id' element={<LobbyCode/> } />
    </Routes>
  )
}

export default App;
