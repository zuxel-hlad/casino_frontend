import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum RouletteLifecycle {
    READY_TO_START = 'start',
    PLAY = 'play',
    FINISHED = 'finished',
    INFO = 'info',
}

export enum RouletteWinOrLose {
    WIN = 'win',
    LOSE = 'lose',
}

interface IRouletteState {
    readonly winBet: number;
    lifecycle: `${RouletteLifecycle}`;
    winOrLose: `${RouletteWinOrLose}` | null;
    activeNumber: number | null;
    currentBet: number;
}

const initialState: IRouletteState = {
    winBet: 36,
    lifecycle: RouletteLifecycle.READY_TO_START,
    activeNumber: null,
    currentBet: 0,
    winOrLose: null,
};

const rouletteSlice = createSlice({
    name: 'roulette',
    initialState,
    reducers: {
        setActiveNumber: (state, action: PayloadAction<number>) => {
            state.activeNumber = action.payload;
        },
        setCurrentBet: (state, action: PayloadAction<number>) => {
            if (state.currentBet + action.payload < 0) {
                state.currentBet = 0;
            } else {
                state.currentBet = state.currentBet + action.payload;
            }
        },
        setRouletteLifecycle: (state, action: PayloadAction<RouletteLifecycle>) => {
            state.lifecycle = action.payload;
        },
        setRouletteWinOrLose: (state, action: PayloadAction<RouletteWinOrLose | null>) => {
            state.winOrLose = action.payload;
        },
        clearRoulette: state => {
            state.activeNumber = null;
            state.currentBet = 0;
        },
    },
    selectors: {
        selectActiveNumber: state => state.activeNumber,
        selectCurrentBet: state => state.currentBet,
        selectRouletteLifecycle: state => state.lifecycle,
        selectRouletteWinBet: state => state.winBet,
        selectRouletteWinOrLose: state => state.winOrLose,
    },
});

const { reducer, actions, selectors } = rouletteSlice;
export const { setActiveNumber, setCurrentBet, setRouletteLifecycle, setRouletteWinOrLose, clearRoulette } = actions;
export const {
    selectActiveNumber,
    selectCurrentBet,
    selectRouletteLifecycle,
    selectRouletteWinBet,
    selectRouletteWinOrLose,
} = selectors;
export default reducer;
