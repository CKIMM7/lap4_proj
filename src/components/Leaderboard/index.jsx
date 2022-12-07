import React, { useState, useEffect } from 'react';
import './Leaderboard.css'
// import { motion } from 'framer-motion';

let tempArr = [
    { id: 1, name: 'a', diffifculty: 'easy', score: 2131 },
    { id: 2, name: 'b', diffifculty: 'easy', score: 200 },
    { id: 3, name: 'c', diffifculty: 'medium', score: 2000 },
    { id: 4, name: 'd', diffifculty: 'easy', score: 100 },
    { id: 5, name: 'e', diffifculty: 'hard', score: 2600 }
];

const Leaderboard = ({ level, category }) => {
    const [rank, setRank] = useState([])
    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        let tempArray = []
        function populateTable(){
            for(let i=0; i < 10; i++){
              if(dataArray[i] !== undefined) tempArray.push(dataArray[i])
              else tempArray.push({ id: null, name: 'xxxx', score: 0 })
            }
            // console.log(tempArray)
        }
        setDataArray(getData)
        populateTable()
        setRank(tempArray)
    }, []) 

    // need to data from db then populate dataArray
    async function getData(){
        try {
            console.log('getData')
            console.log('cate '+category)
            console.log('level '+level)
            
            const url = 'http://localhost:3600';
            fetch('http://localhost:3600/leaderboard/History/easy')
                .then(data => data.json())
                .then(o => console.log(o))

            // const response = await fetch(`${url}/leaderboard/${category}/${level}`);
            const response = await fetch(`${url}/leaderboard/History/easy`);
            
            console.log(response)

            const data = await response.json();
            // console.log(data)
            return data[0]
        } catch(err){
            console.log(err)
            // res.status(500).json({err})
        }
    }

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
            { console.log(rank)}
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