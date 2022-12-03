import React, { useState } from 'react';

const Diffculty = ({ level }) => {

    const [mode, setMode] = useState('easy')

    function startGame(e) { 
        e.preventDefault()
        console.log(`${e.target.value} game selected`)
        setMode(e.target.value)
        // setMode('')
    }

    function displayLeaderboard(e) { 
        e.preventDefault()
        console.log('Show leaderboard')
    }

    return <div className='difficulty'>
        <div id="list-of-difficulty">
            <button type="button" className="choose-mode" onClick={startGame} value="easy" >
                <h2>Beginner</h2>
            </button>
            <button type="button" className="choose-mode" onClick={startGame} value="medium" >
                <h2>Intermediate</h2>
            </button>
            <button type="button" className="choose-mode" onClick={startGame} value="hard" >
                <h2>Expert</h2>
            </button>
        </div>

        {/* <button onClick={startGame}>Beginner</button> */}
        <button onClick={displayLeaderboard}>*Leaderboard Icon*</button>
    </div>
}

export default Diffculty;