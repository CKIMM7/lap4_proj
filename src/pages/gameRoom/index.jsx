import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Room from '../room'

export default function GameRoom() {

  const { roomId } = useParams()
  

  return (
    <div id='nav'>
        <nav>game room: {roomId}</nav>
   
    </div>
  )
}
