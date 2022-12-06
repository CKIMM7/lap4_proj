import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';

import './Difficulty.css'
import Leaderboard from '../Leaderboard';

const Difficulty = ({ }) => {

    const dispatch = useDispatch();
    let difficulty = useSelector(state => state.user.difficulty)
    const [levelIcon, setLevelIcon] = useState();
    const [slide, setSlide] = useState(false);

    function startGame(e, id) { 
        e.preventDefault()
        updateInput(e, id)
        console.log(`start ${difficulty} game`)
        difficulty = '';
    }

    function updateInput(e, id){
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

    function exitLeaderboard(e){
        e.preventDefault()
        setLevelIcon(undefined)
        setSlide(false)
    }

    return <div id='difficulty-screen'>
        <div id="list-of-difficulty">
            <button type="button" className="choose-mode" onClick={e => startGame(e, 'easy')} id="easy" value={difficulty} >
                Beginner
            </button>
            <button type="button" className="choose-mode" onClick={e => startGame(e, 'medium')} id="medium" value={difficulty} >
                Intermediate
            </button>
            <button type="button" className="choose-mode" onClick={e => startGame(e, 'hard')} id="hard" value={difficulty} >
                Expert
            </button>
        </div>
        <div id='leaderboard-icons'>
            <button onClick={displayLeaderboard} id='leaderboard-easy'>*Leaderboard Icon*</button>
            <button onClick={displayLeaderboard} id='leaderboard-medium'>*Leaderboard Icon*</button>
            <button onClick={displayLeaderboard} id='leaderboard-hard'>*Leaderboard Icon*</button>
        </div>
        { console.log('lvlIcon: '+levelIcon) }
        { console.log('slide: '+slide) }
        { levelIcon!==undefined && <div id='leaderboard-screen' className={slide ? "slide" : ""}> 
            <button id='x-btn' onClick={exitLeaderboard}>x btn icon</button>
            <Leaderboard level={levelIcon} />
        </div> }
    </div>
}

export default Difficulty;