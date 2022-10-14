// yaha index.js node server hai which will handel socket io connections

const { Socket } = require('socket.io');

const io = require('socket.io')(8000)

const users = {};

// jaise hi conection aye socket mai to ak  ( =>{)arrow function ko run kar do
io.on('connection', Socket => {
    Socket.on('user-joined', name => {
        console.log("new users", name);
        users[Socket.id] = name;
        Socket.broadcast.emit('user-joined', name);
    });

    Socket.on('send', message => {
        Socket.broadcast.emit('resive', { message: message, name: users[Socket.id] })
    });
})