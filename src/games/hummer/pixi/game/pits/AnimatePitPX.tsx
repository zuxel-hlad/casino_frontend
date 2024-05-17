import { FC, useEffect } from 'react';
import { useAppDispatch } from '@/app/store/hooks';
import { AnimatedSprite } from '@pixi/react';
import { HummerPitState, IHummerPit } from '@/games/hummer/slices/models/Pits';
import * as PIXI from 'pixi.js';
import { setHummerPits, setHummerScore } from '@/games/hummer/slices/hummerSlice';

interface IHummerAnimatePitPXProps {
    frames: PIXI.Texture<PIXI.Resource>[];
    position: IHummerPit['position'];
    currentIndex: number;
}

const WIN_SCORE = 100;
const LOSE_SCORE = -200;

const HummerAnimatePitPX: FC<IHummerAnimatePitPXProps> = ({ frames, position, currentIndex }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const hideTimeout = setTimeout(() => {
            dispatch(setHummerScore(LOSE_SCORE));
            dispatch(
                setHummerPits({
                    currentIndex,
                    state: HummerPitState.EMPTY,
                })
            );
        }, 5000);

        return () => clearTimeout(hideTimeout);
    }, [currentIndex, dispatch]);

    if (!frames?.length) {
        return null;
    }

    const onClick = () => {
        dispatch(setHummerScore(WIN_SCORE));
        dispatch(
            setHummerPits({
                currentIndex,
                state: HummerPitState.EMPTY,
            })
        );
    };
    return (
        <AnimatedSprite
            animationSpeed={0.05}
            isPlaying={true}
            textures={frames}
            anchor={{
                x: 0.5,
                y: 1,
            }}
            position={position}
            loop={false}
            interactive={true}
            onmousedown={onClick}
        />
    );
};

export default HummerAnimatePitPX;
