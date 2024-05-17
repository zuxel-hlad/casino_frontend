import { FC } from 'react';
import { BET_ITEMS } from './infoPanelData';
import { useAppSelector } from '@/app/store/hooks';
import { selectActiveNumber, selectCurrentBet } from '@/games/roulette/slices/rouletteSlice';
import { selectGameBalance } from '@/entities/wallet/slices/walletSlice';
import ScoreWindow from '@/games/roulette/shared/scoreWindow';

const InfoPanel: FC = () => {
    const balance = useAppSelector(selectGameBalance);
    const activeNumber = useAppSelector(selectActiveNumber);
    const currentBet = useAppSelector(selectCurrentBet);
    const winBet = 100;
    return (
        <div className="flex justify-between px-10">
            {BET_ITEMS.map(({ title, id }) => (
                <div key={id}>
                    <div>{title}</div>
                    <div>
                        {id === 'balance' && <ScoreWindow icon="balance">{balance}</ScoreWindow>}
                        {id === 'activeNumber' && (
                            <ScoreWindow icon="activeNumber">
                                <div className="pr-6">{activeNumber}</div>
                            </ScoreWindow>
                        )}
                        {id === 'currentBet' && <ScoreWindow icon="currentBet">{currentBet}</ScoreWindow>}
                        {id === 'winBet' && (
                            <ScoreWindow icon="winBet">
                                <div className="pr-1">{winBet}</div>
                            </ScoreWindow>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoPanel;
