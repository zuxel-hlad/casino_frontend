import { FC } from 'react';
import healthSvg from '@/assets/hummer/health.svg';
import balanceSvg from '@/assets/hummer/balance.svg';
import { useAppSelector } from '@/app/store/hooks';
import { selectHummerHealth, selectHummerScore } from '@/games/hummer/slices/hummerSlice';
import { selectGameBalance } from '@/entities/wallet/slices/walletSlice';

const ScorePanel: FC = () => {
    const scores = useAppSelector(selectHummerScore);
    const health = useAppSelector(selectHummerHealth);
    const balance = useAppSelector(selectGameBalance);

    return (
        <div className="flex justify-between items-center text-xl px-6">
            <div>
                <div>Score</div>
                <div>{scores}</div>
            </div>
            <div className="relative">
                <div className="absolute left-[-20%] top-[50%] translate-y-[-50%]">
                    <img src={healthSvg} />
                </div>
                <div className="min-w-[80px] bg-slate-200 text-center pl-4 rounded-lg">{health}</div>
            </div>
            <div className="relative">
                <div className="absolute left-[-20%] top-[50%] translate-y-[-50%]">
                    <img src={balanceSvg} />
                </div>
                <div className="min-w-[100px] bg-slate-200 text-center pl-4 rounded-lg">{balance}</div>
            </div>
        </div>
    );
};

export default ScorePanel;
