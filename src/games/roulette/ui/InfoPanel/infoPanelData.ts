export interface IScoreItem {
    id: 'balance' | 'winBet' | 'currentBet' | 'activeNumber';
    title: string;
    icon: string;
}

export const BET_ITEMS: IScoreItem[] = [
    {
        id: 'balance',
        title: 'Balance',
        icon: '',
    },
    {
        id: 'winBet',
        title: 'Win Bet',
        icon: '',
    },
    {
        id: 'currentBet',
        title: 'Bet',
        icon: '',
    },
    {
        id: 'activeNumber',
        title: 'Bet Number',
        icon: '',
    },
];
