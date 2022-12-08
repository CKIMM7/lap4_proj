const dbServer = require('./queryFunc');

const getLeaderboard = async (req, res) => {
    try {
        let arr = []
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

const insert = async (req, res) => {
    try {
        console.log(req.body)
        const updatedData = await dbServer.ins(req.body);
        // const updatedData = await dbServer.insert(req.body)
        console.log(updatedData)
        res.status(200).json(updatedData);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = { getLeaderboard, insert }