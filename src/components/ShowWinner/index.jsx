import React, { useEffect, useState } from "react";
import { updateWinner } from '../../api/requests';

const listOfPlayers = [
    { id: 1, name: 'a', score: 101 },
    { id: 2, name: 'b', score: 200 },
    { id: 3, name: 'c', score: 2100 },
    { id: 4, name: 'd', score: 900 },
    { id: 5, name: 'e', score: 5800 }
]

// need this to convert number to string
const listOfCategory = [
    {id: 23, subject: 'History' },
    {id: 17, subject: 'Science' },
    {id: 21, subject: 'Sports'}
]

// data = is the data array.
// replace with listOfPlayers and comment out above listOfPlayers
const ShowWinner = ({ category, data }) => {

    const [rank, setRank] = useState([])

    useEffect(() => {
        setRank(listOfPlayers.sort(compare))
        addData(listOfPlayers)
    }, [])

    // sort array of objects
    function compare( a, b ) {
        if ( a.score > b.score ) return -1;
        if ( a.score < b.score ) return 1;
        return 0;
    }

    function categoryString(){
        let str = '';
        for(let i=0; i<listOfCategory.length; i++){
            if(listOfCategory[i].id === category) str = listOfCategory[i].subject;
        }
        return str;
    }

    async function addData(data){
        // adds per row/player?
        for(let i=0; i<data.length; i++){
            updateWinner(data[i])
        }
    }

    // async function update(data){
    //     try {
    //         console.log('showWinner')
    //         const url = 'http://localhost:3600';

    //         const response = await fetch(`${url}/gameEnd`, {
    //             method: 'POST',
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(data)
    //         })
    //         console.log(response)

    //         const result = await response.json();
    //         // console.log(data)
    //         return result
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

    return <div id='show-winner-screen'>
        <div id='show-winner-list'>
        {rank.map((ele, index) => 
        <div id={`show-winner-${index+1}`} data-testid={`show-winner-item-${index+1}`} key={index}>
            <ul>
                <p>{index+1}</p>
                <p>{ele.name}</p>
                <p>{ele.score}</p>
            </ul>
        </div>
        )} 
        </div>
        <button>Exit Game Lobby</button>
        <button>Return to party lobby</button>
    </div>
}

export default ShowWinner
