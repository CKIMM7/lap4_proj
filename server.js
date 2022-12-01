'use strict';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

/**We need an HTTP server to do two things: serve our client-side assets and 
 * provide a hook for Socket.io to monitor for socket.io-related requests. */

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  //The Socket.io server takes an HTTP server as an argument so that it can listen for socket.io-related requests
const io = socketIO(server);

/**We’ll log clients connecting and disconnecting. Once a client has connected, you can 
 * also add event handlers to the SocketIO instance for receiving client messages. */
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});

// push the current time on the server once per second
setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

/** need this in package:
"engines": {
  "node": "12.17.x"
},
"scripts": {
  "start": "node server.js"
} 
*/

//npm install --save express socket.io
//make sure in package.json there is no module or can't use require!