import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { usersActions } from '../../store/usersSlice';
import { gamesActions } from "../../store/store";
import { roomActions } from "../../store/roomSlice";

import useUserStatus from "../../hooks/useUserStatus";
import { socket } from "../../hooks/socket";
import GameCard from "../GameCard";
import Ready from "../../components/Ready";
import { useEffect } from "react";


const Game = () => {

    const location = useLocation()
    const { userId } = location.state;
    const dispatch = useDispatch();
    const [ start, setStart ] = useState(false)

    const { id } = useParams()
    console.log(userId)

    const roomsArray = useSelector(state => state.room.room)
    console.log(roomsArray)

    const indexOfRoom = roomsArray.findIndex(obj => obj.id == id)
    console.log(indexOfRoom)

    let gameArray = roomsArray[indexOfRoom].game.map((q, index) => {
        return <GameCard data={q} id={id} name={'dd'} key={index} />
    })

    console.log()
    
    useEffect(() => {
        if (!roomsArray[indexOfRoom].users.find(obj => obj.isReady == false)) {
            console.log('Start Game')
            setStart(true)
        }
    }, [roomsArray[indexOfRoom].users])

    return <div>
        {start ? <><p>game page</p>
            <p>username: {userId}</p>
            <ul>{gameArray[0]}</ul></> : <Ready start={start} setStart={setStart} /> }
        
    </div>
}

export default Game;
