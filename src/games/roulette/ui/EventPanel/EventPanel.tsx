import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectRouletteSpinCurrentNumber, setRouletteSpinStartSpeed } from '@/games/roulette/slices/rouletteSpinSlice';
import {
    RouletteLifecycle,
    selectRouletteLifecycle,
    setRouletteLifecycle,
    selectRouletteWinOrLose,
    RouletteWinOrLose,
} from '@/games/roulette/slices/rouletteSlice';
import { SOUNDS_ROULETTE } from '@/games/roulette/scenes/GameScene/config';
import { sound } from '@pixi/sound';
import RouletteStartButton from '@/games/roulette/shared/button/RouletteStartButton';

const EventPanel: FC = () => {
    const dispatch = useAppDispatch();
    const lifecycle = useAppSelector(selectRouletteLifecycle);
    const winOrLose = useAppSelector(selectRouletteWinOrLose);
    const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);

    const onStart = () => {
        sound.play(SOUNDS_ROULETTE.SPIN);
        dispatch(setRouletteSpinStartSpeed());
        dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY));
    };

    return (
        <div>
            {lifecycle === RouletteLifecycle.READY_TO_START && <RouletteStartButton onClick={onStart} />}
            {lifecycle === RouletteLifecycle.PLAY && <div>Playing...</div>}
            {lifecycle === RouletteLifecycle.FINISHED && <div>Calculating</div>}
            {lifecycle === RouletteLifecycle.INFO && (
                <div className="flex gap-4">
                    <div>
                        {winOrLose === RouletteWinOrLose.WIN && 'Win!'}
                        {winOrLose === RouletteWinOrLose.LOSE && 'Lose!'}
                    </div>
                    <div>{currentNumber}</div>
                </div>
            )}
        </div>
    );
};

export default EventPanel;
