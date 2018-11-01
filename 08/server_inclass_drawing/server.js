let port = 3000;
let express = require('express');

let app = express();
let server = app.listen( port );

app.use(express.static('public'));

console.log("Your server is listening on port " + port);

let socket = require('socket.io');
let io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('a new connection @', socket.id);
    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        console.log(data);
        socket.broadcast.emit('mouse', data);
    }
}
