import React, { useEffect, useState } from "react";

// store the sessions current locally or database?
const listOfPlayers = [
    { id: 1, name: 'a', score: 2131 },
    { id: 2, name: 'b', score: 200 },
    { id: 3, name: 'c', score: 2000 }
]

const ShowWinner = ({  }) => {

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

    return <div id='show-winner-container'>
        {rank.map((ele, index) => 
        <div id={`show-winner-${index+1}`} key={index}>
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