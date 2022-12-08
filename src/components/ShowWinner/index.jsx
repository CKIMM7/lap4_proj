import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
// store the sessions current locally or database?
// const listOfPlayers = [
//     { id: 1, name: 'a', score: 2131 },
//     { id: 2, name: 'b', score: 200 },
//     { id: 3, name: 'c', score: 2000 }
// ]

const ShowWinner = ({ data: listOfPlayers }) => {

    const userArray = useSelector(state => state.user.users);
    const navigate = useNavigate()
    const [rank, setRank] = useState([])

    useEffect(() => {
        let tempArray = []
        function populateTable(){
            // sortScore();
            
            for(let i=0; i < 10; i++){
              if(listOfPlayers[i] !== undefined) tempArray.push(listOfPlayers[i])
            }
            console.log(tempArray)
        }
        populateTable()
        setRank(tempArray)
    }, [])

    function addData(){
        
    }

    return <div id='show-winner-container'>
        {rank.map((player, index) => 
            <div id={`show-winner-${index + 1}`} key={index}>
                <h1>Lobby Leaderboard</h1>
            <ul>
                <p>{index+1}</p>
                    <p>{userArray.filter(obj => obj.id == player.name)[0].name}</p>
                <p>{player.score}</p>
                </ul>
                <button onClick={() => navigate('/lobby')}>Back to Lobby</button>
                <button>View Leaderboard</button>
        </div>
        )} 
    </div>
}

export default ShowWinner