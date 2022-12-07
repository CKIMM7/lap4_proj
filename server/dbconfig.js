const express = require('express');
const env = '.env'
const { Client } = require('pg')

const client = new Client('postgresql://bradley:99DLsT1U7bF2UCDFvKlEyg@basic-yak-3859.6zw.cockroachlabs.cloud:26257/quizdb?sslmode=verify-full')

client.connect().then(() => console.log('connected'))
    .catch((err) => console.error('connection error', err.stack))

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

module.exports = client;
