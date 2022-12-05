import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import CreateRoom from '../createRoom'

import Room from '../room'

export default function Nav() {

    let roomsArray = useSelector(state => state.room.room);
    let createdRooms = roomsArray.map((r,i) => {
        console.log(r)
        return <Room data={r} key={i}></Room>
    })

  return (
    <div id='nav'>
        <nav>nav, user</nav>
      <CreateRoom />

     {createdRooms}

        <Outlet />
    </div>
  )
}
