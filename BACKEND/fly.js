// remember to > npm install dgram and > npm install waait in terminal
const dgram = require('dgram');
const wait = require('waait');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const throttle = require('lodash/throttle');
const commandDelays = require('./commandDelays');

const PORT = 8889;
const HOST = '192.168.10.1';
const drone = dgram.createSocket('udp4');
drone.bind(PORT);

console.log(`IO:`+ io);
console.log('you');
function parseState(state) {
  return state
    .split(';')
    .map(x => x.split(':'))
    .reduce((data, [key, value]) => {
      data[key] = value;
      return data;
    }, {});
}

const STATEPORT = 8890;
const droneState = dgram.createSocket('udp4');
droneState.bind(STATEPORT);

drone.on('message', message => {
  console.log(`🚁 : ${message}`);
});

function handleError(err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
}

// droneState.on('message', state => {
//   //   console.log(state.toString());
//   const formattedState = parseState(state.toString());
//   // NOTE: important to stringify it, otherwise it can't parse it
//   console.log(formattedState);
//   socket.emit('dronestate', formattedState);
// });

// // this enters onto SDK mode
// drone.send('command', 0, 7, PORT, HOST, handleError);
// // go to socket.send in node.js to see the parameters needed for this function
// // battery/ msg, 0/offset, 8/lenght of msg, port, address, callback in case of error
// drone.send('battery?', 0, 8, PORT, HOST, handleError);

// const flightCommands = ['command', 'battery?', 'takeoff', 'land'];
// const flightCommands = ['command', 'battery?'];

// let i = 0;

// drone.send('command', 0, 'command'.length, PORT, HOST, handleError);
// async function run() {
//   const command = flightCommands[i];
//   const delay = commandDelays[command];
//   console.log(`running command: ${command}`);
//   drone.send(command, 0, command.length, PORT, HOST, handleError);
//   await wait(delay);
//   i += 1;
//   if (i < flightCommands.length) {
//     return run();
//   }
//   console.log('All Flight Commands done, mission complete!');
// }
// run();

io.on('connection', socket => {
  socket.on('command', command => {
    console.log('Command sent from browser');
    // console.log(command);
    // drone.send(command, 0, command.length, PORT, HOST, handleError);
  });
  const throttledEmit = throttle(socket.emit, 300);
  // socket.emit('status', 'CONNECTED');

  droneState.on(
    'message',
    throttle(state => {
      const formattedState = parseState(state.toString());
      console.log(formattedState);
      socket.emit('dronestate', formattedState);
    }, 100)
  );
  socket.emit('status', 'CONNECTED');
});

http.listen(6767, () => {
  console.log('Socket io server is up and runnig');
});
