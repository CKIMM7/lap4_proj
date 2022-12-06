import React, { useEffect, useState } from "react";

const listOfPlayers = [
    { id: 1, name: 'a', score: 101 },
    { id: 2, name: 'b', score: 200 },
    { id: 3, name: 'c', score: 2100 },
    { id: 4, name: 'd', score: 900 },
    { id: 5, name: 'e', score: 5800 }
]

const ShowWinner = ({  }) => {

    const [rank, setRank] = useState([])

    useEffect(() => {
        setRank(listOfPlayers.sort(compare))
    }, [])

    // sort array of objects
    function compare( a, b ) {
        if ( a.score > b.score ) return -1;
        if ( a.score < b.score ) return 1;
        return 0;
    }

    function addData(){

    }

    return <div id='show-winner-container'>
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
}

export default ShowWinner