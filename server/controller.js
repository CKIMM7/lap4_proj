const dbServer = require('./queryFunc');

// const { getLeaderboard } = dbServer()

const getLeaderboard = async (req, res) => {
    try {
        let arr  = []
        const getData = await dbServer.getLeaderboard(req.params);
        console.log('controller')
        getData.rows.map(obj => arr.push(obj))

        console.log('controller pass ')

        console.log(arr)
        res.status(200).json(arr);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = { getLeaderboard }