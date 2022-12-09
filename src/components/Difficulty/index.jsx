import React, { useState, useEffect } from 'react';
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
    const [levelIcon, setLevelIcon] = useState('');
    const [data, setData] = useState([]);
    const [hasData, setHasData] = useState(false);
    const [showBoard, setShowBoard] = useState(false)
    const [slide, setSlide] = useState(false)

    const listOfCategory = [
        { id: 23, subject: 'History' },
        { id: 17, subject: 'Science' },
        { id: 21, subject: 'Sports' }
    ]


    useEffect(() => {
        async function fetchLeaderboard(category, level) {
            try {
                console.log('fetchLeaderboard')
                // console.log(categoryString())
                // console.log(levelIcon)
                const url = 'https://react-quiz-game-sholes.herokuapp.com/'
                fetch(`${url}/leaderboard/${category}/${level}`)
                    .then(data => data.json())
                    .then(obj => { setData(obj); setHasData(true) })

                // const response = await fetch(`${url}/leaderboard/${category}/${level}`);
                // const scoreArray = await response.json();
                // console.log(scoreArray)
                // setData(scoreArray)
                // return scoreArray
            } catch (err) {
                console.log(err)
            }
        }
        fetchLeaderboard(categoryString(), levelIcon)
    }, [showBoard, levelIcon, hasData])



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
        console.log(e.target)
        console.log(`leaderboard-icon: ${type[1]}`)
        setLevelIcon(type[1])
        setShowBoard(true)
        console.log(showBoard)
    }

    function exitLeaderboard(e) {
        e.preventDefault()
        setLevelIcon('')
        setShowBoard(false)
    }

    function categoryString() {
        let str = '';
        for (let i = 0; i < listOfCategory.length; i++) {
            if (listOfCategory[i].id === category) str = listOfCategory[i].subject;
        }
        return str;
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
                <button className="leaderbtn" ><i onClick={displayLeaderboard} id='leaderboard-easy' class="bi bi-bar-chart"></i></button>
            </div>
            <div className="diffcon" id="interm">
                <i class="bi bi-cloud-drizzle"></i>
                <button type="button" className="choose-mode" onClick={e => startGame(e, 'medium')} id="medium" value={difficulty} >
                    Intermediate
                </button>
                <i class="bi bi-cloud-drizzle"></i>
                <button className="leaderbtn" ><i onClick={displayLeaderboard} id='leaderboard-medium' class="bi bi-bar-chart"></i></button>
            </div>
            <div className="diffcon" id="expert">
                <i class="bi bi-cloud-lightning-rain"></i>
                <button type="button" className="choose-mode" onClick={e => startGame(e, 'hard')} id="hard" value={difficulty} >
                    Expert
                </button>
                <i class="bi bi-cloud-lightning-rain"></i>
                <button className="leaderbtn" ><i onClick={displayLeaderboard} id='leaderboard-hard' class="bi bi-bar-chart"></i></button>
            </div>
        </div>
        <Rockets />
        {/* <div id='leaderboard-icons'>
            <button onClick={displayLeaderboard} id='leaderboard-easy'>*Leaderboard Icon*</button>
            <button onClick={displayLeaderboard} id='leaderboard-medium'>*Leaderboard Icon*</button>
            <button onClick={displayLeaderboard} id='leaderboard-hard'>*Leaderboard Icon*</button>
        </div> */}
        {showBoard && <div id="backdrop"><div id='leaderboard-screen'>
            {console.log('---leaderboadr rendered')}

            <Leaderboard data={data} level={levelIcon} />
            <button id='x-btn' className="nes-btn is-error" onClick={exitLeaderboard}>Close</button>
        </div></div>}

    </div>
}

export default Difficulty;