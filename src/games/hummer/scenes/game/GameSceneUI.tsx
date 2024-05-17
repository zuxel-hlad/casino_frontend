import { FC, PropsWithChildren } from 'react';
import ScorePanel from '@/games/hummer/ui/game/ScorePanel';
import LosePanel from '@/games/hummer/ui/game/LosePanel';

const HummerGameSceneUI: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="relative">
            <div className="absolute left-0 right-0 top-[5%]">
                <ScorePanel />
            </div>
            <div className="absolute left-[50%] translate-x-[-50%] top-[10%]">
                <LosePanel />
            </div>
            {children}
        </div>
    );
};

export default HummerGameSceneUI;
