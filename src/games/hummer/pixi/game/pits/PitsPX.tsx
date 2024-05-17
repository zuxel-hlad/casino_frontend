import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { Container } from '@pixi/react';
import { HummerPitState } from '@/games/hummer/slices/models/Pits';
import { selectHummerPits, setHummerPits } from '@/games/hummer/slices/hummerSlice';
import * as PIXI from 'pixi.js';
import spriteSheet from '@/assets/hummer/sprite-mole.json';
import HummerPitPX from './PitPX';

const PitsPX: FC = () => {
    const dispatch = useAppDispatch();
    const [frames, setFrames] = useState<PIXI.Texture<PIXI.Resource>[]>([]);
    const pits = useAppSelector(selectHummerPits);

    useEffect(() => {
        const pitAlgorithmInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * 9);
            dispatch(
                setHummerPits({
                    currentIndex: randomIndex,
                    state: HummerPitState.PROCESSING,
                })
            );
        }, 2000);
        return () => clearInterval(pitAlgorithmInterval);
    }, [dispatch]);

    useEffect(() => {
        PIXI.Assets.load(JSON.stringify(spriteSheet)).then(() => {
            const names = ['mole-001.svg', 'mole-002.svg', 'mole-003.svg'];
            const generateFrames = names.map(name => {
                return PIXI.Texture.from(name);
            });
            setFrames(generateFrames);
        });
    }, []);
    return (
        <Container
            x={25}
            y={25}
        >
            {pits.map((pit, idx) => (
                <HummerPitPX
                    {...pit}
                    frames={frames}
                    currentIndex={idx}
                    key={`pit-${idx}`}
                />
            ))}
        </Container>
    );
};

export default PitsPX;
