import { FC, PropsWithChildren } from 'react';
import SlotBetsPanel from '@/games/slots/ui/BetsPanel';
import SlotInfoPanel from '@/games/slots/ui/InfoPanel';
import SlotEventPanel from '@/games/slots/ui/EventPanel';

const SlotGameSceneUI: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="relative">
            <div className="absolute left-[50%] bottom-[3%] translate-x-[-50%]">
                <SlotBetsPanel />
            </div>
            <div className="absolute left-[3%] top-[30%]">
                <SlotInfoPanel />
            </div>
            <div className="absolute right-[9%] bottom-[15%]">
                <SlotEventPanel />
            </div>
            {children}
        </div>
    );
};

export default SlotGameSceneUI;
