import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
// store the sessions current locally or database?
const listOfPlayers = [
    { id: 1, name: 'a', score: 101 },
    { id: 2, name: 'b', score: 200 },
    { id: 3, name: 'c', score: 2100 },
    { id: 4, name: 'd', score: 900 },
    { id: 5, name: 'e', score: 5800 }
]

// need this to convert number to string
const listOfCategory = [
    { id: 23, subject: 'History' },
    { id: 17, subject: 'Science' },
    { id: 21, subject: 'Sports' }
]

const ShowWinner = ({ data }) => {

    const userArray = useSelector(state => state.user.users);
    const userState = useSelector(state => state.user);
    const navigate = useNavigate()
    const [rank, setRank] = useState([])
    let category = 'easy'

    useEffect(() => {
        let tempArray = []
        function populateTable() {
            // sortScore();

            for (let i = 0; i < 10; i++) {
                if (listOfPlayers[i] !== undefined) tempArray.push(listOfPlayers[i])
            }
            console.log(tempArray)
        }
        populateTable()
        console.log('zx')
        console.log(data.length)
        console.log()
        data.map(user => {
            console.log(user);
            updateWinner({
                name: userArray.filter(obj => obj.id == user.name)[0].name,
                category: listOfCategory.filter(obj => obj.id == userState.category)[0].subject,
                difficulty: userState.difficulty,
                score: user.score
            })
        })

        setRank(tempArray)
    }, [])
    // useEffect(() => {
    //     // setRank(listOfPlayers.sort(compare))
    //     // addData(listOfPlayers)
    //     // if (end) updateWinner(
    //     //     {
    //     //         name: "LOOL",
    //     //         category: "Science",
    //     //         difficulty: "easy",
    //     //         score: 123
    //     //     }
    //     // )
    //     console.log(data)
    // }, [])
    console.log(listOfCategory.filter(obj => obj.id == userState.category)[0].subject)
    console.log(userState.difficulty)
    console.log(userArray.filter(obj => obj.id == data[0].name)[0].name)
    console.log(data[0].score)
    console.log('Test')


    async function addData(data) {
        // adds per row/player?
        for (let i = 0; i < data.length; i++) {
            updateWinner(data[i])
        }
    }

    function compare(a, b) {
        if (a.score > b.score) return -1;
        if (a.score < b.score) return 1;
        return 0;
    }

    async function updateWinner(data) {
        try {
            console.log('showWinner')
            const url = 'http://localhost:3600';

            const response = await fetch(`${url}/gameEnd`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            // const response = await fetch(`${url}/gameEnd`)
            console.log(response)

            const result = await response.json();
            // console.log(data)
            return result
        } catch (err) {
            console.log(err)
        }
    }

    function categoryString() {
        let str = '';
        for (let i = 0; i < listOfCategory.length; i++) {
            if (listOfCategory[i].id === category) str = listOfCategory[i].subject;
        }
        return str;
    }

    return <div id='show-winner-container'>
        {data.map((player, index) =>
            <div id={`show-winner-${index + 1}`} key={index}>
                <ul>
                    <p>{index + 1}</p>
                    <p>{userArray.filter(obj => obj.id == player.name)[0].name}</p>
                    <p>{player.score}</p>
                </ul>

            </div>
        )}
    </div>
}

export default ShowWinner