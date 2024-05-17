import bet50 from '@/assets/roulette/bet-50.png';
import bet100 from '@/assets/roulette/bet-100.png';
import bet200 from '@/assets/roulette/bet-200.png';
import bet400 from '@/assets/roulette/bet-400.png';
import bet800 from '@/assets/roulette/bet-800.png';

interface IBets {
    value: number;
    image: string;
}

export const BETS: IBets[] = [
    {
        value: 50,
        image: bet50,
    },
    {
        value: 100,
        image: bet100,
    },
    {
        value: 200,
        image: bet200,
    },
    {
        value: 400,
        image: bet400,
    },
    {
        value: 800,
        image: bet800,
    },
];
