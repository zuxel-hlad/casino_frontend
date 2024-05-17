import { Stage } from '@/app/config/ContextBridge';
import { FC } from 'react';
import HummerBgPX from '@/games/hummer/pixi/game/bg/HummerBgPX';
import HummerGameSceneUI from './GameSceneUI';
import PitsPX from '@/games/hummer/pixi/game/pits/PitsPX';

const [width, height] = [550, 700];

const HummerGameScene: FC = () => {
    return (
        <div>
            <HummerGameSceneUI>
                <Stage
                    width={width}
                    height={height}
                    options={{ background: 'green' }}
                >
                    <HummerBgPX />
                    <PitsPX />
                </Stage>
            </HummerGameSceneUI>
        </div>
    );
};

export default HummerGameScene;
