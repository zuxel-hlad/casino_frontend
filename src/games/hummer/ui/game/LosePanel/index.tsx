import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { HummerScenes, selectHummerGameOver, setHummerScene } from '@/games/hummer/slices/hummerSlice';
import { FC, useEffect } from 'react';

const LosePanel: FC = () => {
    const dispatch = useAppDispatch();
    const gameOver = useAppSelector(selectHummerGameOver);
    useEffect(() => {
        if (gameOver) {
            const loseTimeout = setTimeout(() => {
                dispatch(setHummerScene(HummerScenes.MENU));
            }, 3000);

            return () => clearTimeout(loseTimeout);
        }
    }, [dispatch, gameOver]);
    return <>{gameOver && <div>Lose !</div>}</>;
};

export default LosePanel;
