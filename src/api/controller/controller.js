// const dbServer = require('../../../server/queryFunc');

// const { getLeaderboard } = dbServer()

const getLeaderboard = async (req, res) => {
    try {
        const result = await dbServer.getLeaderboard();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = { getLeaderboard }