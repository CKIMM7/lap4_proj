import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { difficulty } from '../../hooks/useGetGames';
import getGamesAxio from '../../api/axios'

const Diffculty = ({ level }) => {

    const dispatch = useDispatch();
    const difficulty = useSelector(state => state.user.difficulty)

    function startGame(e, id) { 
        e.preventDefault()
        updateInput(e, id)
        console.log(`start ${level} game`)
        level = '';
        // fetch/trigger start function?
    }

    function updateInput(e, id){
        console.log(`${id} game selected`)
        level = id
    }

    function displayLeaderboard(e) { 
        e.preventDefault()
        console.log('Show leaderboard')
    }

    return <div className='difficulty'>
        <div id="list-of-difficulty">
            <button type="button" className="choose-mode" onClick={e => startGame(e, 'easy')} id="easy" value={level} >
                Beginner
            </button>
            <button type="button" className="choose-mode" onClick={e => startGame(e, 'medium')} id="medium" value={level} >
                Intermediate
            </button>
            <button type="button" className="choose-mode" onClick={e => startGame(e, 'hard')} id="hard" value={level} >
                Expert
            </button>
        </div>

        <button onClick={displayLeaderboard}>*Leaderboard Icon*</button>
    </div>
}

export default Diffculty;