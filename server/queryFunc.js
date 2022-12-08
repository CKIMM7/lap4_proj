const client = require('./dbconfig')

async function createTables() { 
    try {
        const query = `
        DROP TABLE IF EXISTS History;
DROP TABLE IF EXISTS Sports;
DROP TABLE IF EXISTS Science;

CREATE TABLE History (
    id serial PRIMARY KEY,
    name VARCHAR (4),
    difficulty VARCHAR(7),
    score int
);

CREATE TABLE Sports (
    id serial PRIMARY KEY,
    name VARCHAR (4),
    difficulty VARCHAR(7),
    score int
);

CREATE TABLE Science (
    id serial PRIMARY KEY,
    name VARCHAR (4),
    difficulty VARCHAR(7),
    score int
);

        `
        await client.query(query, (err, res) => {
            console.log(err)
            console.log(res)
        })

    }
    catch (err) { console.log(err) }
}

async function insertData() {
    try {
        const query = `
        
INSERT INTO History (name, difficulty, score) 
VALUES 
('TEST', 'easy', 9255),
('TEST', 'easy', 9255),
('TEST', 'easy', 9255),
('TEST', 'easy', 9255),
('TEST', 'medium', 9255),
('TEST', 'medium', 9255),
('TEST', 'medium', 8246),
('TEST', 'medium', 9200),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255);

INSERT INTO Sports (name, difficulty, score) 
VALUES 
('TEST', 'easy', 9255),
('TEST', 'easy', 9255),
('TEST', 'easy', 9255),
('TEST', 'easy', 9255),
('TEST', 'medium', 9255),
('TEST', 'medium', 9255),
('TEST', 'medium', 9255),
('TEST', 'medium', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255);

INSERT INTO Science (name, difficulty, score) 
VALUES 
('TEST', 'easy', 9255),
('TEST', 'easy', 9255),
('TEST', 'easy', 9255),
('TEST', 'easy', 9255),
('TEST', 'medium', 9255),
('TEST', 'medium', 9255),
('TEST', 'medium', 9255),
('TEST', 'medium', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255),
('TEST', 'hard', 9255);

`
        await client.query(query, (err, res) => {
            console.log(err)
            console.log(res)
        })

    }
    catch (err) { console.log(err) }
}

async function showData() {
    try {
        const query = 'SELECT * FROM History;'
        await client.query(query, (err, res) => {
            console.log(err)
            console.log(res.rows)
        })

    }
    catch (err) { console.log(err) }
}

async function ins(data) {
    return new Promise (async (resolve, reject) => {
        try {
            let results;
            
            console.log(data)
            resolve(data)

            const { name, category, difficulty, score } = data;

            const query = (`INSERT INTO ${category} (name, difficulty, score) VALUES ('${name}', '${difficulty}', ${score});` )
            console.log(query)
            const response = await client.query(query)
            // console.log(response)
            resolve(data) //update one row
            
            // await client.query(query, (err, res) => {
            //     console.log(err)
            //     console.log(res.rows)
            //     results = res.rows
            // })
            // return results
        } catch (err) { 
            console.log(err) 
        }
    })
}

async function getLeaderboard(data) {
    return new Promise (async (resolve, reject) => {
        try {
            const query = (`SELECT * FROM ${data.category} WHERE difficulty = '${data.difficulty}' ORDER BY score DESC;`)
            // console.log(query)

            const response = await client.query(query)
            console.log(response)
            resolve(response)
        } catch (err) { 
            console.log(err) 
        } 
    })
}
// createTables()
// insertData()
// showData()
// getLeaderboard('History','medium')

module.exports = { createTables, ins, getLeaderboard }