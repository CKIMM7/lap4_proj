import React, { useState, useEffect } from 'react';
import './Leaderboard.css'
import { motion } from 'framer-motion';

let tempArr = [
    { id: 1, name: 'a', diffifculty: 'easy', score: 2131 },
    { id: 2, name: 'b', diffifculty: 'easy', score: 200 },
    { id: 3, name: 'c', diffifculty: 'medium', score: 2000 },
    { id: 4, name: 'd', diffifculty: 'easy', score: 100 },
    { id: 5, name: 'e', diffifculty: 'hard', score: 2600 }
];

const Leaderboard = ( level, category ) => {
    const [rank, setRank] = useState([])
    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        let tempArray = []
        function populateTable(){
            for(let i=0; i < 10; i++){
              if(tempArr[i] !== undefined) tempArray.push(tempArr[i])
              else tempArray.push({ id: null, name: 'xxxx', score: i })
            }
            console.log(tempArray)
        }
        // getData()
        populateTable()
        setRank(tempArray)
    }, []) 

    // need to data from db then populate dataArray
    function getData(){

    }

    const displayLevelTitle = (type) => {
        if(type === 'easy') return 'Beginner';
        else if(type === 'medium') return 'Intermediate';
        else if(type === 'hard') return 'Expert';
        else return 'Error';
    }

<<<<<<< HEAD
    //             if(type === 1 || type === 0) { 
    //                 console.log('add: '+tempArr[i].score)
    //                 sortedData[i] = tempArr[i]; 
    //             }
    //             else if(type === -1) { 
    //                 console.log('add: '+tempArr[i+1])
    //                 sortedData[i] = tempArr[i+1];
    //             }
    //         }
    //     }
    // }   

    return <div id={`leaderboard-${difficulty}`} className="leaderboarddisplay">
=======
    return <div id={`leaderboard-${level}`}>
>>>>>>> a96bd548ac89c19c05a45ff03abc7949a70d0e14
        <h2>Leaderboard</h2>
        <h2>{displayLevelTitle(level)}</h2>
        <div id='leaderboard-rank-list'> 
            {/* { console.log(rank)} */}
            {rank.map((ele, index) => 
            <div id={`leaderboard-row-${index+1}`} key={index}>
                <ul>
                    <p>{index+1}</p>
                    <p>{ele.name}</p>
                    <p>{ele.score}</p>
                </ul>
            </div>
            )} 
        </div>
    </div>
}

export default Leaderboard;