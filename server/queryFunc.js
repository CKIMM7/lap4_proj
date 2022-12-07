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
('TEST', 'Easy', 9255),
('TEST', 'Easy', 9255),
('TEST', 'Easy', 9255),
('TEST', 'Easy', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Medium', 8246),
('TEST', 'Medium', 9200),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255);

INSERT INTO Sports (name, difficulty, score) 
VALUES 
('TEST', 'Easy', 9255),
('TEST', 'Easy', 9255),
('TEST', 'Easy', 9255),
('TEST', 'Easy', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255);

INSERT INTO Science (name, difficulty, score) 
VALUES 
('TEST', 'Easy', 9255),
('TEST', 'Easy', 9255),
('TEST', 'Easy', 9255),
('TEST', 'Easy', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Medium', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255),
('TEST', 'Hard', 9255);

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
        const query = 'SELECT * FROM History'
        await client.query(query, (err, res) => {
            console.log(err)
            console.log(res.rows)
        })

    }
    catch (err) { console.log(err) }
}


async function ins(name, difficulty, score, category) {
    let results;
    try {
        const query = (`INSERT INTO $1 (name. difficulty, score) VALUES ($2,$3,$4);`,[category, name, difficulty, score])
        await client.query(query, (err, res) => {
            console.log(err)
            console.log(res.rows)
            results = res.rows
        })
        return results

    }
    catch (err) { console.log(err) }
}

async function getLeaderboard(category, difficulty) {

    let results;
    try {
        const query = (`SELECT * FROM ${category} WHERE difficulty = '${difficulty}' ORDER BY score DESC;`)
        console.log(query)
        await client.query(query, (err, res) => {
            err ? console.log(err) : console.log(res.rows)
            results = res.rows
        })
        return results

    }
    catch (err) { console.log(err) }
}
// createTables()
// insertData()
// showData()
getLeaderboard('History','Medium')

module.exports = { createTables, getLeaderboard }