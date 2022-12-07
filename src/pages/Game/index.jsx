import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { usersActions } from '../../store/usersSlice';
import { gamesActions } from "../../store/store";
import { roomActions } from "../../store/roomSlice";
import useUserStatus from "../../hooks/useUserStatus";
import Ready from "../../components/Ready";
import GameCard from "../GameCard";
const Game = () => {
    const location = useLocation()
    const { userId } = location.state;
    const dispatch = useDispatch();
    const [start, setStart] = useState(false)
    const [wait, setWaiting] = useState(false)
    const { id } = useParams()
    const roomsArray = useSelector(state => state.room.room)
    console.log(roomsArray)
    const indexOfRoom = roomsArray.findIndex(obj => obj.id == id)
    console.log(indexOfRoom)
    let gameArray = roomsArray[indexOfRoom].game.map((q, index) => {
        return <GameCard data={q} id={id} userId={userId} username={'dd'} key={index} />
    })
    console.log(userId)
    const indexOfUser = roomsArray[indexOfRoom].users.findIndex(user => user.name == userId)
    //console.log(currentGame[findIndex].users)
    //console.log(findIndexUser)
    useEffect(() => {
        if (!roomsArray[indexOfRoom].users.find(obj => obj.isReady == false)) {
            console.log('Start Game')
            setStart(true)
        }
        if (roomsArray[indexOfRoom].game[0].answered.includes(userId) && (roomsArray[indexOfRoom].game[0].length != roomsArray[indexOfRoom].users.length)) {
            setWaiting(true)
        }
        else setWaiting(false)

    }, [roomsArray[indexOfRoom].users])
    return <div>{
        start
            ? wait
                ? <h1>Waiting for other players</h1>
                : <>
                <p>game page</p>
                <p>username: {userId}</p>
                <p>score: {roomsArray[indexOfRoom].users[indexOfUser].score}</p>
                <ul>{gameArray[0]}</ul></>
            : <Ready start={start} setStart={setStart} />}
        
    </div>
}
export default Game; 