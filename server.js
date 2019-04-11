const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
io.on('connection',(socket)=>{
    socket.emit('connected')
    socket.on('send_msg', (data)=>{
        io.emit('recv_msg', data)
    })
});

app.use('/',express.static(path.join(__dirname, 'frontend')));
server.listen(2345,()=> console.log('Website open on http://localhost:2345'));
