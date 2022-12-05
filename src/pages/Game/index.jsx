import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';
import useUserStatus from "../../hooks/useUserStatus";
//getGamesAxio

import GameCard from "../GameCard";

const Game = () => {
    const dispatch = useDispatch();

    let difficulty = useSelector(state => state.user.difficulty) //save var to here
    let category = useSelector(state => state.user.category) 

    let getGames = useGetGames(10, category, difficulty, 'multiple') //call ap

    let game = useSelector(state => state.games.gamesData) //grab the data here
    //console.log(game)

    let gameArray = game.map((q, index) => {
        return <GameCard data={q} key={index}/>
    })



    return <div>
        <p>game page</p>
        <ul>{gameArray[0]}</ul>
    </div>
}

export default Game;
