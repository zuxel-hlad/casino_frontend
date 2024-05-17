import { FC } from 'react';
import { Stage } from '@/app/config/ContextBridge';
import { twMerge } from 'tailwind-merge';
import SlotGameSceneUI from './GameSceneUI';
import SlotLifecycleProvider from '@/games/slots/scene/SlotLifecycleProvider';
import BalanceProvider from './BalanceProvider';
import BodyPX from '@/games/slots/pixi/body/BodyPX';
import RowsPX from '@/games/slots/pixi/rows/RowsPX';
import styles from './gameScene.module.css';

const [width, height] = [1150, 500];

const SlotGameScene: FC = () => {
    return (
        <div className={twMerge('flex items-center justify-center w-max', styles.table)}>
            <SlotLifecycleProvider>
                <BalanceProvider>
                    <SlotGameSceneUI>
                        <Stage
                            width={width}
                            height={height}
                            options={{ background: 'rgba(46, 29, 51, 0.96)' }}
                        >
                            <BodyPX />
                            <RowsPX />
                        </Stage>
                    </SlotGameSceneUI>
                </BalanceProvider>
            </SlotLifecycleProvider>
        </div>
    );
};

export default SlotGameScene;
