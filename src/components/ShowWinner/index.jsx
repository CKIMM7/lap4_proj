import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
// store the sessions current locally or database?
const listOfPlayers = [
    { id: 1, name: 'a', score: 101 },
    { id: 2, name: 'b', score: 200 },
    { id: 3, name: 'c', score: 2100 },
    { id: 4, name: 'd', score: 900 },
    { id: 5, name: 'e', score: 5800 }
]

// need this to convert number to string
const listOfCategory = [
    { id: 23, subject: 'History' },
    { id: 17, subject: 'Science' },
    { id: 21, subject: 'Sports' }
]

const ShowWinner = ({ data: listOfPlayers }) => {

    const userArray = useSelector(state => state.user.users);
    const navigate = useNavigate()
    const [rank, setRank] = useState([])
    let category = 'easy'

    // useEffect(() => {
    //     let tempArray = []
    //     function populateTable(){
    //         // sortScore();
            
    //         for(let i=0; i < 10; i++){
    //           if(listOfPlayers[i] !== undefined) tempArray.push(listOfPlayers[i])
    //         }
    //         console.log(tempArray)
    //     }
    //     populateTable()
    //     setRank(tempArray)
    // }, [])
    useEffect(() => {
        setRank(listOfPlayers.sort(compare))
        addData(listOfPlayers)
    }, [])

    async function addData(data) {
        // adds per row/player?
        for (let i = 0; i < data.length; i++) {
            updateWinner(data[i])
        }
    }

    function compare(a, b) {
        if (a.score > b.score) return -1;
        if (a.score < b.score) return 1;
        return 0;
    }

    async function updateWinner(data) {
        try {
            console.log('showWinner')
            const url = 'http://localhost:3600';

            const response = await fetch(`${url}/gameEnd`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            // const response = await fetch(`${url}/gameEnd`)
            console.log(response)

            const result = await response.json();
            // console.log(data)
            return result
        } catch (err) {
            console.log(err)
        }
    }

    function categoryString() {
        let str = '';
        for (let i = 0; i < listOfCategory.length; i++) {
            if (listOfCategory[i].id === category) str = listOfCategory[i].subject;
        }
        return str;
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