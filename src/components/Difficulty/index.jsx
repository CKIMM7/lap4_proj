import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';
import Rockets from '../Rockets';

import './Difficulty.css'
import Leaderboard from '../Leaderboard';

const Difficulty = ({ }) => {

    const dispatch = useDispatch();
    let difficulty = useSelector(state => state.user.difficulty)
    const category = useSelector(state => state.user.category)
    const [levelIcon, setLevelIcon] = useState();
    const [slide, setSlide] = useState(false);

    function startGame(e, id) {
        e.preventDefault()
        updateInput(e, id)
        console.log(`start ${difficulty} game`)
        difficulty = '';
    }

    function updateInput(e, id) {
        console.log(`${id} game selected`)
        difficulty = id
        dispatch(usersActions.setDifficulty(difficulty))
    }

    function displayLeaderboard(e) {
        e.preventDefault()
        let id = e.target.id
        let type = id.split('-')
        console.log(`leaderboard-icon: ${type[1]}`)
        setLevelIcon(type[1])
        setSlide(true)
    }

    function exitLeaderboard(e) {
        e.preventDefault()
        setLevelIcon(undefined)
        setSlide(false)
    }

    return <div id='difficulty-screen'>
        <h1 id="creategame">Create Game</h1>
        <h2 id="instructions">Now, select the game difficulty</h2>
        <div id="list-of-difficulty">
            <div className="diffcon" id="begin">
                <i class="bi bi-cloud"></i>
                <button type="button" className="choose-mode" onClick={e => startGame(e, 'easy')} id="easy" value={difficulty} >
                    Beginner
                </button>
                <i class="bi bi-cloud"></i>
                <button onClick={displayLeaderboard} className="leaderbtn" id='leaderboard-easy'><i class="bi bi-bar-chart"></i></button>
            </div>
            <div className="diffcon" id="interm">
                <i class="bi bi-cloud-drizzle"></i>
                <button type="button" className="choose-mode" onClick={e => startGame(e, 'medium')} id="medium" value={difficulty} >
                    Intermediate
                </button>
                <i class="bi bi-cloud-drizzle"></i>
                <button onClick={displayLeaderboard} className="leaderbtn" id='leaderboard-medium'><i class="bi bi-bar-chart"></i></button>
            </div>
            <div className="diffcon" id="expert">
                <i class="bi bi-cloud-lightning-rain"></i>
                <button type="button" className="choose-mode" onClick={e => startGame(e, 'hard')} id="hard" value={difficulty} >
                    Expert
                </button>
                <i class="bi bi-cloud-lightning-rain"></i>
                <button onClick={displayLeaderboard} className="leaderbtn" id='leaderboard-hard'><i class="bi bi-bar-chart"></i></button>
            </div>
        </div>
        <Rockets />
        <div id='leaderboard-icons'>
            <button onClick={displayLeaderboard} id='leaderboard-easy'>*Leaderboard Icon*</button>
            <button onClick={displayLeaderboard} id='leaderboard-medium'>*Leaderboard Icon*</button>
            <button onClick={displayLeaderboard} id='leaderboard-hard'>*Leaderboard Icon*</button>
        </div>
    </div>
}

export default Difficulty;
