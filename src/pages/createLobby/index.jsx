import React from "react";

import { useSelector, dispatch } from "react-redux";
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import { Category, Difficulty } from '../../components'

import useUserStatus from "../../hooks/useUserStatus";
import useGetGames from "../../hooks/useGetGames";


const CreateLobby = (room) => {

    const navigate = useNavigate();
    const params = useParams()
    const { broadCastGame } = useUserStatus()

    let difficulty = useSelector(state => state.user.difficulty) //save var to here
    let category = useSelector(state => state.user.category) 
    // const { state } = useLocation();
    // const { lobbyId } = state;

    function makeRoom(){

        broadCastGame(
            {num: 10, 
            category: category, 
            difficulty: difficulty, 
            choice: 'multiple'})

        //navigate(`/lobby/${lobbyId}`)
    }

    return <div>
        {!category && <Category /> }
<<<<<<< HEAD:src/pages/Lobby/index.jsx
        
        { difficulty && category && <button onClick={Redirect} >start game</button> }
=======
        {!difficulty && <Difficulty /> }
        { difficulty && category && <button onClick={makeRoom} >start game</button> }
>>>>>>> a96bd548ac89c19c05a45ff03abc7949a70d0e14:src/pages/createLobby/index.jsx
    </div>
}

export default CreateLobby
