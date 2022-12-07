const express = require('express');
const server = express();

const routes = require('./routes');

server.use('/', routes)

server.get('/', (req, res) => res.send('Hey'))

module.exports = server;