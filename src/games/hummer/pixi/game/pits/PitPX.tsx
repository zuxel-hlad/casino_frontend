import { FC } from 'react';
import { HummerPitState, IHummerPit } from '@/games/hummer/slices/models/Pits';
import { Sprite } from '@pixi/react';
import pitEmpty from '@/assets/hummer/item.svg';
import * as PIXI from 'pixi.js';
import HummerAnimatePitPX from './AnimatePitPX';

interface IHummerPitProps extends IHummerPit {
    frames: PIXI.Texture<PIXI.Resource>[];
    currentIndex: number;
}
const HummerPitPX: FC<IHummerPitProps> = ({ position, frames, state, currentIndex }) => {
    return (
        <>
            {state === HummerPitState.EMPTY && (
                <Sprite
                    position={position}
                    image={pitEmpty}
                    anchor={{
                        x: 0.5,
                        y: 1,
                    }}
                />
            )}
            {state === HummerPitState.PROCESSING && (
                <HummerAnimatePitPX
                    currentIndex={currentIndex}
                    position={position}
                    frames={frames}
                />
            )}
        </>
    );
};

export default HummerPitPX;
