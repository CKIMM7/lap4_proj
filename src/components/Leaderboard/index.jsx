import React, { useState, useEffect } from 'react';
import './Leaderboard.css'

let tempArr = [
    { id: 1, name: 'a', diffifculty: 'easy', score: 2131 },
    { id: 2, name: 'b', diffifculty: 'easy', score: 200 },
    { id: 3, name: 'c', diffifculty: 'medium', score: 2000 },
    { id: 4, name: 'd', diffifculty: 'easy', score: 100 },
    { id: 5, name: 'e', diffifculty: 'hard', score: 2600 }
];


//dataArray
const Leaderboard = ( level ) => {
    // let sortedData = [];
    const [rank, setRank] = useState([])

    useEffect(() => {
        let tempArray = []
        function populateTable(){
            // sortScore();
            
            for(let i=0; i < 10; i++){
              if(tempArr[i] !== undefined) tempArray.push(tempArr[i])
              else tempArray.push({ id: null, name: 'xxxx', score: i })
            }
            console.log(tempArray)
        }
        populateTable()
        setRank(tempArray)
    }, [])

    // sort array of objects
    // function compare( a, b ) {
    //     if ( a.score < b.score ) return -1;
    //     if ( a.score > b.score ) return 1;
    //     return 0;
    // }

    // data will be sorted upon being added to database instead?

    // function sortScore(){
    //     for(let i=0; i<tempArr.length; i++){
    //         if(i+1 < tempArr.length){ 
    //             console.log('check: '+tempArr[i].score+' with: '+tempArr[i+1].score)
    //             const type = compare(tempArr[i].score, tempArr[i+1].score)

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

    const displayLevelTitle = (type) => {
        if(type === 'easy') return 'Beginner';
        else if(type === 'medium') return 'Intermediate';
        else if(type === 'hard') return 'Expert';
        else return 'Error';
    }

    return <div id={`leaderboard-${level}`}>
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