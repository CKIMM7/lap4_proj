import { useState, useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom'
import useGetGames from '../../hooks/useGetGames';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import useUserStatus from '../../hooks/useUserStatus';
import { roomActions } from '../../store/roomSlice';
import { usersActions } from '../../store/usersSlice';
import Room from '../room';
import './index.css'

// const socket = io.connect("https://helpful-taffy-b1fa62.netlify.app/");

function LobbyCode() {

    const dispatch = useDispatch();
    const naviate = useNavigate();
    const { createRoom, sendMessage, setMessage, broadCastGame } = useUserStatus();
    const [ showLobby, setShowLobby ] = useState()

    useEffect(() => {
        return (() => {
            dispatch(usersActions.setDifficulty(''))
            dispatch(usersActions.setCategory(''))
        })
    }, [])
    const userArray = useSelector(state => state.user.users);
    const roomsArray = useSelector(state => state.room.room);
    const messageReceived = useSelector(state => state.room.messageReceived);

    console.log(userArray)
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
            <h1 id="roomtitle">Select an Option to Get Started</h1>
            {showLobby ? <>
            <button onClick={joinRoom}>Back</button>
             {roomsArray.length > 0 ? createdRooms : <p>No rooms</p>}</>  : 
             <div id="joincreate">
             <div className="containerbtn">
             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
  <line x1="16" y1="5" x2="19" y2="8" />
</svg>
                <button className="roomselect" id="createbtn" onClick={createLobbyHandler}>Create Room</button>
             </div>
             <div className="containerbtn">
             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-gamepad" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="2" y="6" width="20" height="12" rx="2" />
  <path d="M6 12h4m-2 -2v4" />
  <line x1="15" y1="11" x2="15" y2="11.01" />
  <line x1="18" y1="13" x2="18" y2="13.01" />
</svg>
                <button className="roomselect" id="joinbtn" onClick={joinRoom}>Join Room</button></div>
             </div>}
            
        </div>
    )
}

export default LobbyCode;
