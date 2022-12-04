import React, { useState, useEffect } from 'react';

let tempArr = [
    { id: 1, name: 'a', score: 2131},
    { id: 2, name: 'b', score: 200},
    { id: 3, name: 'c', score: 2000},
    { id: 4, name: 'd', score: 100},
    { id: 5, name: 'e', score: 300}
];

const Leaderboard = ( dataArray ) => {
    // let sortedData = [];
    const [rank, setRank] = useState([])

    useEffect(() => {
        function populateTable(){
            // sortScore();
            for(let i=0; i< 10; i++){
              if(tempArr[i] !== undefined) setRank(rank[i] = tempArr[i])
              else setRank(rank[i] = { id: null, name: 'xxxx', score: '0000' })
            }
            console.log(rank)
        }
        populateTable()
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

    return <div id='leaderboard-beginner'>
        <h2>Leaderboard</h2>
        <h2>Beginner</h2>
        {rank.row[0].map((ele, index) => <div key={index}>
            <p>{index}</p>
            <p>{ele.name}</p>
            <p>{ele.score}</p>
        </div>
        )}
    </div>
}

export default Leaderboard;