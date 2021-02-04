
let express = require('express');

let app = express();
let server = app.listen(3000);

app.use(express.static('public'));

console.log("SHIT IS RUNNING OR WHATEVER");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('new connection: ' + socket.id);

  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data)
    // io.socket.emit('mouse', data) THIS WILL SEND TO EVERYONE 
    console.log(socket.id)
    console.log(data);
  }

}