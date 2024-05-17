import { FC, PropsWithChildren } from 'react';
import RouletteTable from '@/games/roulette/ui/RouletteTable/RouletteTable';
import BetsPanel from '@/games/roulette/ui/BetsPanel/BetsPanel';
import InfoPanel from '@/games/roulette/ui/InfoPanel/InfoPanel';
import EventPanel from '@/games/roulette/ui/EventPanel/EventPanel';

const GameSceneUI: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="relative">
            <div className="absolute left-0 right-0 top-[5%] text-white">
                <InfoPanel />
            </div>
            <div className="absolute left-[62%] top-[25%] text-white">
                <EventPanel />
            </div>
            <div className="absolute left-[45%] bottom-[29%] text-white">
                <RouletteTable />
            </div>
            <div className="absolute left-[45%] bottom-[10%] z-10">
                <BetsPanel />
            </div>
            {children}
        </div>
    );
};

export default GameSceneUI;
