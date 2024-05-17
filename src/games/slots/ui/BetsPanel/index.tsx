import { FC } from 'react';
import { BETS } from './betsData';
// import { SOUNDS_ROULETTE } from '@/games/roulette/scenes/GameScene/config';
import { useAppDispatch } from '@/app/store/hooks';
import { setSlotCurrentBet } from '@/games/slots/slices/slotSlice';
// import { sound } from '@pixi/sound';

const SlotBetsPanel: FC = () => {
    const dispatch = useAppDispatch();
    const pickBet = (value: number) => {
        dispatch(setSlotCurrentBet(value));
        // sound.play(SOUNDS_ROULETTE.BET);
    };

    return (
        <div>
            <div className="flex gap-3 items-center">
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

export default SlotBetsPanel;
