import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom'
import useGetGames from '../../hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import useUserStatus from '../../hooks/useUserStatus';
import { roomActions } from '../../store/roomSlice';
import Room from '../../pages/room';

// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");

function LobbyCode() {

    const dispatch = useDispatch();
    const { status } = useGetGames(10, 11, 'easy', 'multiple')

    const { createRoom, sendMessage, setRoom, setMessage } = useUserStatus();

    const userData = useSelector(state => state.user.user);
    const roomsArray = useSelector(state => state.room.room);
    const messageReceived = useSelector(state => state.room.messageReceived);

    let createdRooms = roomsArray.map((r, i) => {
        console.log(r)
        return <Room data={r} key={i}></Room>
    })
    console.log(roomsArray)

    // useEffect(() => {
    //   console.log(roomsArray)

    // }, [roomsArray])


    return (

        <div className="App">
            <button onClick={createRoom}> Create Room</button>
            <input
                placeholder="Message..."
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
            <button onClick={sendMessage}> Send Message</button>
            <h1> Message:</h1>
            {messageReceived}
            {createdRooms}
        </div>
    )
}

export default LobbyCode;
