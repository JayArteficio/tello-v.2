// remember to > npm install dgram and > npm install waait in terminal
const dgram = require('dgram');
const wait = require('waait');
const commandDelays = require('./commandDelays');

const PORT = 8889;
const HOST = '192.168.10.1';
const STATEPORT = 8890;

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

const droneState = dgram.createSocket('udp4');
droneState.bind(STATEPORT);

drone.on('message', message => {
  console.log(`🚁 : ${message}`);
});

function parseState(state) {
  return state.split(";").map(x => x.split(':'));
}
droneState.on('message', state => {
  console.log(state.toString());
  const formattedState = parseState(state.toString());
  // NOTE: important to stringify it, otherwise it can't parse it
  console.log(formattedState);
});

function handleError(err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
}

// // this enters onto SDK mode
// drone.send('command', 0, 7, PORT, HOST, handleError);
// // go to socket.send in node.js to see the parameters needed for this function
// // battery/ msg, 0/offset, 8/lenght of msg, port, address, callback in case of error
// drone.send('battery?', 0, 8, PORT, HOST, handleError);

// const flightCommands = ['command', 'battery?', 'takeoff', 'land'];
const flightCommands = ['command', 'battery?'];

let i = 0;

async function run() {
  const command = flightCommands[i];
  const delay = commandDelays[command];
  console.log(`running command: ${command}`);
  drone.send(command, 0, command.length, PORT, HOST, handleError);
  await wait(delay);
  i += 1;
  if (i < flightCommands.length) {
    return run();
  }
  console.log('All Flight Commands done, mission complete!');
}

run();
