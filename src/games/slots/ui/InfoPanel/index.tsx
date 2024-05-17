import { useAppSelector } from '@/app/store/hooks';
import { FC, useEffect, useState } from 'react';
import { SlotLifecycle, selectSlotCurrentBet, selectSlotLifecycle } from '@/games/slots/slices/slotSlice';
import { selectGameBalance } from '@/entities/wallet/slices/walletSlice';
import SlotScoreWindow from '@/games/slots/shared/scoreWindow/ScoreWindow';

const SlotInfoPanel: FC = () => {
    const currentBet = useAppSelector(selectSlotCurrentBet);
    const balance = useAppSelector(selectGameBalance);
    const [displayBalance, setDisplayBalance] = useState<number>(balance);
    const lifecycle = useAppSelector(selectSlotLifecycle);
    const isInfo = lifecycle === SlotLifecycle.INFO;

    useEffect(() => {
        if (isInfo) {
            setDisplayBalance(balance);
        }
    }, [isInfo, balance, displayBalance]);

    return (
        <div className="flex flex-col gap-8">
            <SlotScoreWindow icon="balance">{displayBalance ?? 0}</SlotScoreWindow>
            <SlotScoreWindow icon="bets">{currentBet ?? 0}</SlotScoreWindow>
        </div>
    );
};

export default SlotInfoPanel;
