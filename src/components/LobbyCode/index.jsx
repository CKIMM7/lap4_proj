import { useState, useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom'
import useGetGames from '../../hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import useUserStatus from '../../hooks/useUserStatus';
import { roomActions } from '../../store/roomSlice';
import Room from '../room';

// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");

function LobbyCode() {

    const dispatch = useDispatch();
    const naviate = useNavigate();
    const { createRoom, sendMessage, setMessage, broadCastGame } = useUserStatus();
    const [ showLobby, setShowLobby ] = useState()

    const roomsArray = useSelector(state => state.room.room);
    const messageReceived = useSelector(state => state.room.messageReceived);

    console.log(roomsArray)

    function joinRoom(e) {
        e.preventDefault()
        console.log('Join Room');
        setShowLobby(!showLobby)
    }

    let createdRooms = roomsArray.map((r, i) => {
        console.log(r)
        return <Room data={r} key={i}></Room>
    })
    console.log(roomsArray)

    const createLobbyHandler = () => {
        naviate('/createlobby')
    }

    return (

        <div className="App">
            {showLobby ? <><button onClick={joinRoom}>Back</button> {roomsArray.length > 0 ? createdRooms : <p>No rooms</p>}</>  : <><button onClick={createLobbyHandler}> Create Room</button><button onClick={joinRoom}> Join Room</button></>}
            
        </div>
    )
}

export default LobbyCode;
