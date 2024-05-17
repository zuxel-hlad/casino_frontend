import { FC } from 'react';
import { BETS } from './betsData';
import { SOUNDS_ROULETTE } from '@/games/roulette/scenes/GameScene/config';
import { useAppDispatch } from '@/app/store/hooks';
import { setCurrentBet } from '@/games/roulette/slices/rouletteSlice';
import { sound } from '@pixi/sound';
import styles from './betsPanel.module.css';

const BetsPanel: FC = () => {
    const dispatch = useAppDispatch();
    const pickBet = (value: number) => {
        sound.play(SOUNDS_ROULETTE.BET);
        dispatch(setCurrentBet(value));
    };

    return (
        <div className={styles.wrapper}>
            <div className="flex gap-4 items-center">
                {BETS.map(({ image, value }) => (
                    <div
                        className="cursor-pointer hover:scale-[1.05] transition-all"
                        onClick={() => pickBet(value)}
                        onContextMenu={e => {
                            e.preventDefault();
                            pickBet(-value);
                        }}
                        key={value}
                    >
                        <img src={image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BetsPanel;
