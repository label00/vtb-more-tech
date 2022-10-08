import { FC, ReactNode } from 'react';

import Wallet from './Wallet';
import Drum from './Drum';
import Trainings from './Trainings';
import Planning from './Planning';
import Services from './Services';

const SideBar: FC = (): JSX.Element => {
    return (
        <aside className="sidebar">
            <Wallet />
            <Drum />
            <Trainings />
            <Planning />
            <Services />
        </aside>
    );
}

export default SideBar;
