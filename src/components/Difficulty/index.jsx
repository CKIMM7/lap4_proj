import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGetGames from "../../hooks/useGetGames"
import { usersActions } from '../../store/usersSlice';

const Diffculty = ({ }) => {

    const dispatch = useDispatch();
    let difficulty = useSelector(state => state.user.difficulty)

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
        console.log('Show leaderboard')
    }

    return <div className='difficulty'>
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

        <button onClick={displayLeaderboard}>*Leaderboard Icon*</button>
    </div>
}

export default Diffculty;