import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { FC, PropsWithChildren, useEffect } from 'react';
import {
    SlotLifecycle,
    SlotWinOrLose,
    selectSlotCurrentBet,
    selectSlotLifecycle,
    selectSlotWinOrLose,
} from '@/games/slots/slices/slotSlice';
import { setBalance } from '@/entities/wallet/slices/walletSlice';

const WIN_KOEF = 10;

const BalanceProvider: FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useAppDispatch();
    const lifecycle = useAppSelector(selectSlotLifecycle);
    const win = useAppSelector(selectSlotWinOrLose);
    const currentBet = useAppSelector(selectSlotCurrentBet);
    const isPlaying = lifecycle === SlotLifecycle.PLAY;

    useEffect(() => {
        if (isPlaying) {
            dispatch(setBalance(win === SlotWinOrLose.WIN ? currentBet * WIN_KOEF : -currentBet));
        }
    }, [lifecycle, dispatch, currentBet, isPlaying, win]);
    return <>{children}</>;
};

export default BalanceProvider;
