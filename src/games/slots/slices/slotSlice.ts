import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRow } from '@/games/slots/pixi/rows/utils';

const rows: IRow[] = [
    {
        id: 1,
        activeItemID: 7,
    },
    {
        id: 2,
        activeItemID: 7,
    },
    {
        id: 3,
        activeItemID: 7,
    },
];

export enum SlotLifecycle {
    READY_TO_START = 'start',
    PLAY = 'play',
    STOPPING = 'stopping',
    STOP = 'stop',
    INFO = 'info',
}

export enum SlotWinOrLose {
    WIN = 'win',
    LOSE = 'lose',
}

interface ISlot {
    lifecycle: `${SlotLifecycle}`;
    winOrLose: `${SlotWinOrLose}` | null;
    rows: IRow[];
    currentBet: number;
}

const initialState: ISlot = {
    lifecycle: SlotLifecycle.READY_TO_START,
    rows,
    winOrLose: null,
    currentBet: 0,
};

const slotSlice = createSlice({
    name: 'slot',
    initialState,
    reducers: {
        setSlotLifecycle: (state, action: PayloadAction<SlotLifecycle>) => {
            state.lifecycle = action.payload;
        },
        startSlot: state => {
            state.lifecycle = SlotLifecycle.PLAY;
            state.rows = state.rows.map(row => ({
                ...row,
                activeItemID: Math.ceil(Math.random() * 12),
            }));
            const arrayActiveItemsID = state.rows.map(row => row.activeItemID);
            const firstItem = arrayActiveItemsID[0];
            const win = arrayActiveItemsID.every(elem => elem === firstItem);
            state.winOrLose = win ? SlotWinOrLose.WIN : SlotWinOrLose.LOSE;
        },
        setSlotCurrentBet: (state, action: PayloadAction<number>) => {
            if (state.currentBet + action.payload < 0) {
                state.currentBet = 0;
            } else {
                state.currentBet = state.currentBet + action.payload;
            }
        },
    },
    selectors: {
        selectSlotLifecycle: state => state.lifecycle,
        selectSlotRows: state => state.rows,
        selectSlotCurrentBet: state => state.currentBet,
        selectSlotWinOrLose: state => state.winOrLose,
    },
});

const { reducer, actions, selectors } = slotSlice;
export const { setSlotLifecycle, startSlot, setSlotCurrentBet } = actions;
export const { selectSlotLifecycle, selectSlotRows, selectSlotCurrentBet, selectSlotWinOrLose } = selectors;
export default reducer;
