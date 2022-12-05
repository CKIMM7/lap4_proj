import React from "react";

import { useSelector, dispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

import {Category, Difficulty} from '../../components'

import useUserStatus from "../../hooks/useUserStatus";
import useGetGames from "../../hooks/useGetGames";


const Lobby = () => {

    const navigate = useNavigate();
    const { broadCastGame } = useUserStatus()

    let difficulty = useSelector(state => state.user.difficulty) //save var to here
    let category = useSelector(state => state.user.category) 

    function Redirect(){

        //let getGames = useGetGames(10, category, difficulty, 'multiple')
        broadCastGame({num: 10, 
            categoy: category, 
            difficulty: difficulty, 
            choice: 'multiple'})
        navigate('/startgame')
    }

    return <div>
        {!category && <Category /> }
        {!difficulty && <Difficulty /> }
        { difficulty && category && <button onClick={Redirect} >start game</button> }
    </div>
}

export default Lobby
