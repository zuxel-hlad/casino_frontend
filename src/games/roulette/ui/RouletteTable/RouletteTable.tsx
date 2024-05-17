import { FC } from 'react';
import { ROULETTE_TABLE_NUMBERS } from './initData';
import { SOUNDS_ROULETTE } from '@/games/roulette/scenes/GameScene/config';
import { twMerge } from 'tailwind-merge';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectActiveNumber, setActiveNumber } from '@/games/roulette/slices/rouletteSlice';
import { sound } from '@pixi/sound';

const RouletteTable: FC = () => {
    const dispatch = useAppDispatch();
    const activeNumber = useAppSelector(selectActiveNumber);

    const handleClick = (number: number) => {
        sound.play(SOUNDS_ROULETTE.NUMBER);
        dispatch(setActiveNumber(number));
    };

    return (
        <div className="flex flex-wrap w-[602px] border border-solid border-white">
            {ROULETTE_TABLE_NUMBERS.map(({ number, color }) => (
                <div
                    onClick={() => handleClick(number)}
                    className={twMerge(
                        'w-[50px] h-[50px] flex justify-center items-center border border-solid border-white text-xl font-medium cursor-pointer hover:border-yellow',
                        color === 'red' && 'bg-red',
                        color === 'black' && 'bg-black',
                        activeNumber === number && 'border-yellow border-2'
                    )}
                    key={number}
                >
                    {number}
                </div>
            ))}
        </div>
    );
};

export default RouletteTable;
