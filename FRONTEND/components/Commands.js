function sendCommand(x) {
    console.log(`Sending command...${x}`);
}

const Commands = () => (
  <div>
    <button onClick={sendCommand('takeoff')}>Take Off</button>
    <button onClick={sendCommand('land')}>Land</button>
    <button onClick={sendCommand('up 20')}>Up 20cm</button>
    <button onClick={sendCommand('down 20')}>Down 20cm</button>
  </div>
);
export default Commands;
