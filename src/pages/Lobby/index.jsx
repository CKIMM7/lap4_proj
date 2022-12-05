import React from "react";

import { useSelector, dispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

import {Category, Difficulty} from '../../components'

const Lobby = () => {

    const navigate = useNavigate();

    let difficulty = useSelector(state => state.user.difficulty) //save var to here
    let category = useSelector(state => state.user.category) 

    function Redirect(){
        navigate('/startgame')
    }

    return <div>
        {!category && <Category /> }
        {!difficulty && <Difficulty /> }
        { difficulty && category && <button onClick={Redirect} >start game</button> }
    </div>
}

export default Lobby