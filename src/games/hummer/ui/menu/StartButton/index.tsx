import { useAppDispatch } from '@/app/store/hooks';
import { HummerScenes, setHummerScene } from '@/games/hummer/slices/hummerSlice';
import { FC } from 'react';

const HummerMenuStartButton: FC = () => {
    const dispatch = useAppDispatch();
    const onStart = () => dispatch(setHummerScene(HummerScenes.GAME));
    return (
        <button
            type="button"
            onClick={onStart}
        >
            StartButton
        </button>
    );
};

export default HummerMenuStartButton;
