// export default () => (<div>Hello Next.js</div>);

import DroneState from '../components/DroneState';
import Commands from '../components/Commands';

const IndexPage = () => (
    <div>
        <DroneState />
        <Commands />
    </div>
);

export default IndexPage;
