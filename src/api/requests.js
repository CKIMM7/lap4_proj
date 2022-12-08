const url = 'http://localhost:3600';

// need to data from db then populate dataArray
async function fetchLeaderboard(category, level){
    try {
        console.log('fecthLeaderboard')

        // fetch('http://localhost:3600/leaderboard/History/easy')
        //     .then(data => data.json())
        //     .then(o => console.log(o))

        const response = await fetch(`${url}/leaderboard/${category}/${level}`);
        const data = await response.json();
        console.log(data)
        return data[0]
    } catch(err){
        console.log(err)
    }
}

async function updateWinner(categoryStr, data){
    try {
        console.log('showWinner')
        const url = 'http://localhost:3600';

        const response = await fetch(`${url}/gameEnd`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        console.log(response)

        const result = await response.json();
        // console.log(data)
        return result
    } catch(err) {
        console.log(err)
    }
}

module.exports = { fetchLeaderboard, updateWinner }