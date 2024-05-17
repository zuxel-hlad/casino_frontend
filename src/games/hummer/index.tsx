import { FC } from 'react';
import { useAppSelector } from '@/app/store/hooks';
import { HummerScenes, selectHummerScene } from './slices/hummerSlice';
import HummerMenuScene from './scenes/menu/HummerMenuScene';
import HummerGameScene from './scenes/game/HummerGameScene';

const HummerCore: FC = () => {
    const scene = useAppSelector(selectHummerScene);

    switch (scene) {
        case HummerScenes.MENU:
            return <HummerMenuScene />;
        case HummerScenes.GAME:
            return <HummerGameScene />;
        default:
            return <div>Something wrong...</div>;
    }
};

export default HummerCore;
