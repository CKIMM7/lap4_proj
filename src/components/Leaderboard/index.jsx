import React, { useRef, useEffect } from 'react';

let tempArr = [
    { id: 1, name: 'a', score: 2131},
    { id: 2, name: 'b', score: 2131},
    { id: 3, name: 'c', score: 2131}
];

//bug: 1 obj not added
const Leaderboard = () => {
    let sortedData = [];
    let rank = useRef([]);

    useEffect(() => {
        populateTable()
    }, [])

    function getScore(){
        
    }

    // sort array of objects
    function compare( a, b ) {
        if ( a.score < b.score ) return -1;
        if ( a.score > b.score ) return 1;
        return 0;
    }

    function sortScore(){
        for(let i=0; i<tempArr.length; i++){
            console.log('check: '+tempArr[i].score)
            if(i+1 < tempArr.length){ 
                console.log('with: '+tempArr[i+1].score)
                const type = compare(tempArr[i].score, tempArr[i+1].score)

                if(type === 1 || type === 0) sortedData[i] = tempArr[i];
                else if(type === -1) sortedData[i] = tempArr[i+1];
                

            }
        }
    }

    function populateTable(){
        sortScore();
    // bug in line 50
        for(let i=0; i< 10; i++){
          if(sortedData[i] !== undefined) rank[i] = sortedData[i]
        //   else rank[i] = { id: null, name: 'xxxx', score: 0000 }
        //   console.log( rank[i])
        }
    }
    
    return <div id='leaderboard-beginner'>
        <h2>Leaderboard</h2>
        {rank.map((ele, index) => <div>
            key={index}
            <p>{index}</p>
            <p>{ele.name}</p>
            <p>{ele.score}</p>
        </div>
        )}
        <h2>Beginner</h2>
    </div>
}

export default Leaderboard;

// rank, top 10

/** database
 * id, name, score
 */