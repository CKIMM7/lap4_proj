import React, { useState, useEffect } from 'react';
import './Leaderboard.css'
// import { motion } from 'framer-motion';

let tempArr = [
    { id: 1, name: 'a', difficulty: 'easy', score: 2131 },
    { id: 2, name: 'b', difficulty: 'easy', score: 200 },
    { id: 3, name: 'c', difficulty: 'medium', score: 2000 },
    { id: 4, name: 'd', difficulty: 'easy', score: 100 },
    { id: 5, name: 'e', difficulty: 'hard', score: 2600 }
];

const Leaderboard = ({ data }) => {
    const [rank, setRank] = useState([])
    const [dataArray, setDataArray] = useState([])
    const [ hasData, setHasData ] = useState(false)
    console.log(data)
    // setDataArray(data)
    let level;
    let category;
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
        setRank(data)
    }, []) 

    // need to data from db then populate dataArray
    async function getData(){
        try {
            console.log('getData')
            console.log('cate '+category)
            console.log('level ' + level)
            let arr = []
            
            const url = 'http://localhost:3600';
            fetch(`${url}/leaderboard/History/easy`)
                .then(data => data.json())
                .then(o => { arr = o; setHasData(true) })

            // const response = await fetch(`${url}/leaderboard/${category}/${level}`);
            const response = await fetch(`${url}/leaderboard/History/easy`);
            
            // console.log(response)
            console.log("Data Array")
            console.log(arr)

            const data = await response.json();
            setHasData(true)
            // console.log(data)
            return arr
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