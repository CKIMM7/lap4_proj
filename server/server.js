const express = require('express');
const server = express();

const { Client } = require('pg')
const client = new Client('postgresql://bradley:99DLsT1U7bF2UCDFvKlEyg@basic-yak-3859.6zw.cockroachlabs.cloud:26257/quizdb?sslmode=verify-full')
client.connect()

const routes = require('./routes');

server.use('/', routes)

server.get('/', (req, res) => res.send('Hey'))

module.exports = server;