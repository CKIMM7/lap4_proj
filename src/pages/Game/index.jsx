import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';
import useUserStatus from "../../hooks/useUserStatus";
//getGamesAxio


// import {Category, Difficulty} from '../../components'

const Game = () => {
    const dispatch = useDispatch();
    let game = useSelector(state => state.games.gamesData) //grab the data here
    let difficulty = useSelector(state => state.user.difficulty) //save var to here
    let category = useSelector(state => state.user.category) 

    let getGames = useGetGames(10, category, difficulty, 'multiple') //call api

    console.log(game)

    return <div>
        { console.log(getGames) }
    </div>
}

export default Game;