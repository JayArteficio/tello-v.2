// remember to > npm install dgram and > npm install waait in terminal
const dgram = require('dgram');
const wait = require('waait');

const PORT = 8889;
const HOST = '192.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

drone.on('message', message => {
    console.log(`🚁 : ${message}`); 

});

function handleError(err) {
    if (err) {
        console.log(`Error: ${err}`);
    }
}

// this enters onto SDK mode
drone.send('command', 0, 7, PORT, HOST, handleError);
// go to socket.send in node.js to see the parameters needed for this function
// battery/ msg, 0/offset, 8/lenght of msg, port, address, callback in case of error
drone.send('battery?', 0, 8, PORT, HOST, handleError);