import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { usersActions } from '../../store/usersSlice';

import './Difficulty.css'
import Leaderboard from '../Leaderboard';
import { fetchLeaderboard } from '../../api/requests';
import { useEffect } from 'react';

const listOfCategory = [
    {id: 23, subject: 'History' },
    {id: 17, subject: 'Science' },
    {id: 21, subject: 'Sports'}
]

const Difficulty = ({ }) => {

    const dispatch = useDispatch();
    let difficulty = useSelector(state => state.user.difficulty)
    const category = useSelector(state => state.user.category)
    const [levelIcon, setLevelIcon] = useState('');
    const [data, setData] = useState([]);
    const [hasData, setHasData] = useState(false);
    const [ showBoard, setShowBoard ] = useState(false)


    useEffect(() => {
        async function fetchLeaderboard(category, level) {
            try {
                console.log('fetchLeaderboard')
                // console.log(categoryString())
                // console.log(levelIcon)
                const url = 'http://localhost:3600'
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
    },[showBoard, levelIcon, hasData])

    function startGame(e, id) { 
        e.preventDefault()
        updateInput(e, id)
        // console.log(`start ${difficulty} game`)
        difficulty = '';
    }

    function updateInput(e, id){
        // console.log(`${id} game selected`)
        difficulty = id
        dispatch(usersActions.setDifficulty(difficulty))
    }

    function displayLeaderboard(e) { 
        e.preventDefault()
        let id = e.target.id
        let type = id.split('-')
        // console.log(`leaderboard-icon: ${type[1]}`)
        // setData(renderFirst)
        setLevelIcon(type[1])
        setShowBoard(true)

    }

    function exitLeaderboard(e){
        e.preventDefault()
        // setData([])
        setLevelIcon('')
        setShowBoard(false)

    }

    function categoryString(){
        let str = '';
        for(let i=0; i<listOfCategory.length; i++){
            if(listOfCategory[i].id === category) str = listOfCategory[i].subject;
        }
        return str;
    }

    // function renderFirst(){
    //     return fetchLeaderboard(categoryString(), levelIcon)
    // }

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
        <div id='leaderboard-icons' data-testid='leaderboard-icons'>
            <button onClick={displayLeaderboard} id='leaderboard-easy'>*Leaderboard Icon*</button>
            <button onClick={displayLeaderboard} id='leaderboard-medium'>*Leaderboard Icon*</button>
            <button onClick={displayLeaderboard} id='leaderboard-hard'>*Leaderboard Icon*</button>
        </div>
        { console.log('lvlIcon: '+levelIcon) }
        { showBoard && <div id='leaderboard-screen'> 
            { console.log('---leaderboadr rendered') }
            <button id='x-btn' onClick={exitLeaderboard}>x btn icon</button>
            <Leaderboard data={data} level={ levelIcon} />
        </div> }
    </div>
}

export default Difficulty;