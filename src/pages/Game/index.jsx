import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from "react-router-dom";
import axios from 'axios';

import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';
import { gamesActions } from "../../store/store";
import useUserStatus from "../../hooks/useUserStatus";
//getGamesAxio

import GameCard from "../GameCard";
import { roomActions } from "../../store/roomSlice";

const Game = () => {
    const dispatch = useDispatch();

    const { lobbyId } = useParams()
    console.log(lobbyId)
    // let difficulty = useSelector(state => state.user.difficulty) //save var to here
    // let category = useSelector(state => state.user.category) 

    // let getGames = useGetGames(10, category, difficulty, 'multiple') //call ap

    dispatch(roomActions.getQuestions(lobbyId))



    // let gameArray = game.map((q, index) => {
    //     return <GameCard data={q} key={index}/>
    // })



    return <div>
        <p>game page</p>
        {/* <ul>{gameArray[0]}</ul> */}
    </div>
}

export default Game;
