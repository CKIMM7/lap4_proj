import React, { useState, useEffect } from 'react';

const FetchData = ({ level, category}) => {
    const [data, setData] = useState()

    useEffect(() => {
        const url = 'http://localhost:3600';
        fetch(`${url}/leaderboard/${category}/${level}`)
            .then(data => data.json())
            .then(obj => { setData(obj) })
        console.log(data)
    }, [level, category]) 

    function test() { }
    
    return data

 }

export default FetchData