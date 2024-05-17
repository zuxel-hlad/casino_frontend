import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import {
    RouletteLifecycle,
    RouletteWinOrLose,
    clearRoulette,
    selectActiveNumber,
    selectCurrentBet,
    selectRouletteLifecycle,
    selectRouletteWinBet,
    setRouletteLifecycle,
    setRouletteWinOrLose,
} from '@/games/roulette/slices/rouletteSlice';
import { clearRouletteSpin, selectRouletteSpinCurrentNumber } from '@/games/roulette/slices/rouletteSpinSlice';
import { setBalance } from '@/entities/wallet/slices/walletSlice';

const GameSceneActionsProvider: FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useAppDispatch();
    const lifecycle = useAppSelector(selectRouletteLifecycle);
    const activeNumber = useAppSelector(selectActiveNumber);
    const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
    const currentBet = useAppSelector(selectCurrentBet);
    const winBet = useAppSelector(selectRouletteWinBet);

    useEffect(() => {
        if (lifecycle === RouletteLifecycle.FINISHED) {
            if (activeNumber === currentNumber) {
                //win case
                dispatch(setBalance(currentBet * winBet));
                dispatch(setRouletteWinOrLose(RouletteWinOrLose.WIN));
            } else {
                //lose case
                dispatch(setBalance(-currentBet));
                dispatch(setRouletteWinOrLose(RouletteWinOrLose.LOSE));
            }
            dispatch(setRouletteLifecycle(RouletteLifecycle.INFO));
        }
    }, [activeNumber, currentNumber, winBet, currentBet, lifecycle, dispatch]);

    useEffect(() => {
        if (lifecycle === RouletteLifecycle.INFO) {
            const lifeTimeout = setTimeout(() => {
                dispatch(setRouletteLifecycle(RouletteLifecycle.READY_TO_START));
                dispatch(clearRoulette());
                dispatch(clearRouletteSpin());
            }, 3000);

            return () => clearTimeout(lifeTimeout);
        }
    }, [lifecycle, dispatch]);

    return <>{children}</>;
};

export default GameSceneActionsProvider;
