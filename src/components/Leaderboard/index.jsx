import React, { useState, useEffect } from 'react';
import './Leaderboard.css'

let tempArr = [
    { id: 1, name: 'a', diffifculty: 'easy', score: 2131 },
    { id: 2, name: 'b', diffifculty: 'easy', score: 200 },
    { id: 3, name: 'c', diffifculty: 'medium', score: 2000 },
    { id: 4, name: 'd', diffifculty: 'easy', score: 100 },
    { id: 5, name: 'e', diffifculty: 'hard', score: 2600 }
];

const Leaderboard = ({ data, level }) => {
    const [rank, setRank] = useState([])
    // const [dataArray, setDataArray] = useState([])
    const [hasData, setHasData] = useState(false)
    const [slide, setSlide] = useState(false)

    useEffect(() => {
        let tempArray = []
        function populateTable() {
            for (let i = 0; i < 10; i++) {
                if (data[i] !== undefined) tempArray.push(data[i])
                else tempArray.push({ id: null, name: 'xxxx', score: 0 })
            }
            // console.log(tempArray)
        }

        populateTable()
        setRank(tempArray)
        console.log('level: ' + level)
    }, [data])

    // need to data from db then populate dataArray
    function getData() {

    }

    const displayLevelTitle = (type) => {
        if (type === 'easy') return 'Beginner';
        else if (type === 'medium') return 'Intermediate';
        else if (type === 'hard') return 'Expert';
        else return 'Error';
    }

    // return <div id={`leaderboard-${level}`}>
    //     <h2>Leaderboard</h2>
    //     <h2>{displayLevelTitle(level)}</h2>
    //     <div id='leaderboard-rank-list'> 
    //         {/* { console.log(rank)} */}
    //         {rank.map((ele, index) => 
    //         <div id={`leaderboard-row-${index+1}`} key={index}>
    //             <ul>
    //                 <p>{index+1}</p>
    //                 <p>{ele.name}</p>
    //                 <p>{ele.score}</p>
    //             </ul>
    //         </div>
    //         )} 
    //     </div>
    // </div>
    return <div className="leaderboardcont" id={`leaderboard-${level}`}>
        <h2>Leaderboard</h2>
        <h2>{displayLevelTitle(level)}</h2>
        <div id='leaderboard-rank-list'>

            {console.log('rankArr')}
            {console.log(rank)}

            {rank.map((ele, index) =>
                <div id={`leaderboard-row-${index + 1}`} key={index}>
                    <ul id="leaderboarddata">
                        <p>{index + 1}</p>
                        <p style={{ color: 'black' }}>{ele.name}</p>
                        <p style={{ color: 'white' }}>{ele.score}</p>
                    </ul>
                </div>
            )}

        </div>
    </div>
}

export default Leaderboard;