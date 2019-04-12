import { useState, useEffect } from 'react';
import socket from '../socket';
// import Battery from '../Battery';
// import Tilt from '../Tilt';

function useDroneState() {
  const [droneState, updateDroneState] = useState([]);
  useEffect(() => {
    console.log('yo');
    console.log(droneState);
    socket.on('dronestate', updateDroneState);
  }, []);
  return droneState;
  console.log(droneState);
}

function useSocket() {
  const [status, updateStatus] = useState('DISCONNECTED');
  useEffect(() => {
    socket.on('status', updateStatus);
  }, []);
  return status;
}

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  console.log(`This is the droneState: ${droneState}`);
  console.log(droneState);
  console.log(status);
  return (
    <div>
      <p>Status: {status}</p>
      <p>Drone State: {droneState}</p>
    </div>
  );
};

export default DroneState;
