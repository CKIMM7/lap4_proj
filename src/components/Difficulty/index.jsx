import React from 'react';

const Diffculty = () => {

    function startGame(e) { 
        e.preventDefault()
        console.log('Go to beginner game')
    }

    function displayLeaderboard(e) { 
        e.preventDefault()
        console.log('Show leaderboard')
    }

    return (
        <>
            <div className='difficulty'>
                <button onClick={startGame}>Beginner</button>
                <button onClick={displayLeaderboard}>*Leaderboard Icon*</button>
            </div>
        </>
    )
}

export default Diffculty;