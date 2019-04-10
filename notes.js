Start fresh, use Wes Bos but make it my own and understand it fully

1. Will node as Backend and react for FRONTEND

2. SDK v2 now up. Wes Bos using SDK 1.

3. Use wifi to send/receive from laptop
   use a different port for state 
   another different port for video

4. Tellocommandlinejs on github

5. Tello uses UDP. Which uses dgram (cbecause it can't do it with the browser)

6. 


// Old Notes
Backend skeleton:

> npm install dgram
    > npm install waait
connect wifi to Tello then
    > node fly.js to run the tello


Used Next.js to create front end framework.

See Next.js tutorial from travesty

FRONTEND
    - pages
index.js
    - components
DroneState.js
Commands.js
Hook up websockets

Add in fly.js
const app = require("express")();
// webserver
// remember to > npm i socket.io express
const http = require("http").Server(app);
// import http library and passed are express instance
const io = require("socket.io")(http);
// new socket io instance in existing server

comment out go and add io code:

io.on("connection", socket => {
    socket.on("command", command => {
        console.log("Command sent from browser");
    });

    socket.emit("status", "CONNECTED");
});

http.listen(3001, () => {
    console.log("Socket io server is up and running");
});

Check if it works
Jays - Air: BACKEND JayArteficio$ node fly.js
Tello Running...
Socket io server is up and running

http://localhost:3001/socket.io/socket.io.js now works

connect socket to FRONTEND

touch socket.js


        // "author": "Wes Bos",
  // "license": "ISC",
  // "dependencies": {
  //   "babel-plugin-styled-components": "^1.9.2",
  //   "next": "latest",
  //   "react": "16.7.0-alpha.0 - next",
  //   "react-dom": "16.7.0-alpha.0 - next",
  //   "socket.io-client": "^2.1.1",
  //   "styled-components": "^4.1.1"
