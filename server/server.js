const express = require('express');
const server = express();
const cors = require('cors')
const { Client } = require('pg')
const client = new Client('postgresql://bradley:99DLsT1U7bF2UCDFvKlEyg@basic-yak-3859.6zw.cockroachlabs.cloud:26257/quizdb?sslmode=verify-full')
client.connect()

const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes');
server.use(cors())
server.use('/', routes)

server.get('/', (req, res) => res.send('Hey'))

module.exports = server;