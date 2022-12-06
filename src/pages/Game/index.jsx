import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { usersActions } from '../../store/usersSlice';
import { gamesActions } from "../../store/store";
import { roomActions } from "../../store/roomSlice";

import useUserStatus from "../../hooks/useUserStatus";

import GameCard from "../GameCard";


const Game = () => {

    const location = useLocation()
    const { userId } = location.state;
    const dispatch = useDispatch();

    const { lobbyId } = useParams()
    console.log(userId)

    const currentGame = useSelector(state => state.room.room)
    console.log(currentGame)

    const findIndex = currentGame.findIndex(obj => obj.id == lobbyId)
    console.log(findIndex)

    let gameArray = currentGame[findIndex].game.map((q, index) => {
        return <GameCard data={q} id={lobbyId} username={'dd'} key={index} />
    })

    return <div>
        <p>game page</p>
        <p>username: {userId}</p>
        <ul>{gameArray[0]}</ul>
    </div>
}

export default Game;
