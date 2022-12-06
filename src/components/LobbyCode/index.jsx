import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom'
import useGetGames from '../../hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import useUserStatus from '../../hooks/useUserStatus';
import { roomActions } from '../../store/roomSlice';
import Room from '../room';

// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");

function LobbyCode() {

    const dispatch = useDispatch();
    const { createRoom, sendMessage, setMessage } = useUserStatus();

    const roomsArray = useSelector(state => state.room.room);
    const messageReceived = useSelector(state => state.room.messageReceived);

    console.log(roomsArray)

    function joinRoom () {console.log('Join Room')}

    let createdRooms = roomsArray.map((r, i) => {
        console.log(r)
        return <Room data={r} key={i}></Room>
    })
    console.log(roomsArray)

    return (

        <div className="App">
            <button onClick={createRoom}> Create Room</button>
            <button onClick={joinRoom}>Join Room</button>


            {createdRooms}
        </div>
    )
}

export default LobbyCode;
