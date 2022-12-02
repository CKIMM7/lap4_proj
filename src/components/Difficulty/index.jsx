import React from 'react';

const Diffculty = ({ level }) => {

    function startGame(e) { 
        e.preventDefault()
        console.log(`Goto ${e.target.value} game`)
        setMode(e.target.value)
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