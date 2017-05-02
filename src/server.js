var express = require('express');
var base = express();
var events = require('./events')
var http = require('http').Server(base);
var io = require('socket.io')(http);

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
io.on('connection', function(socket){
  console.log('A user connected');
  socket = require('./events')(socket);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});