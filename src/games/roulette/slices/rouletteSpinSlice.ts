import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const ROULETTE_NUMBERS: number[] = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29,
    7, 28, 12, 35, 3, 26,
];

interface IRouletteSpin {
    readonly rouletteNumbers: number[];
    readonly stepCircle: number;
    speed: number;
    rotationInProgress: boolean;
    degreesRotation: number;
    currentNumber: number | null;
}

const initialState: IRouletteSpin = {
    rouletteNumbers: ROULETTE_NUMBERS,
    stepCircle: 360 / ROULETTE_NUMBERS.length,
    speed: 0,
    rotationInProgress: false,
    degreesRotation: 0,
    currentNumber: null,
};

const rouletteSpinSlice = createSlice({
    name: 'rouletteSpin',
    initialState,
    reducers: {
        setRouletteSpinStartSpeed: state => {
            const randomSpeed = 1 + Math.random() * 0.1;
            state.speed = randomSpeed;
            state.rotationInProgress = true;
        },
        setRouletteSpinSpeed: (state, action: PayloadAction<number | null>) => {
            const speed = action.payload;
            if (speed === 0) {
                state.rotationInProgress = false;
                state.speed = 0;
            } else {
                state.speed = state.speed - state.speed / 150;
            }
        },
        setRouletteSpinDegreesRotation: (state, action: PayloadAction<number>) => {
            state.degreesRotation = action.payload;
            const deltaIndex = Math.floor((action.payload + state.stepCircle / 2) / state.stepCircle);
            const currentIndex = state.rouletteNumbers.length - deltaIndex;
            state.currentNumber = state.rouletteNumbers[currentIndex];
        },
        clearRouletteSpin: state => {
            state.currentNumber = null;
        },
    },
    selectors: {
        selectRouletteSpinSpeed: state => state.speed,
        selectRouletteSpinRotationInProgress: state => state.rotationInProgress,
        selectRouletteSpinCurrentNumber: state => state.currentNumber,
    },
});

const { selectors, reducer, actions } = rouletteSpinSlice;
export const { selectRouletteSpinSpeed, selectRouletteSpinRotationInProgress, selectRouletteSpinCurrentNumber } =
    selectors;
export const { setRouletteSpinSpeed, setRouletteSpinStartSpeed, setRouletteSpinDegreesRotation, clearRouletteSpin } =
    actions;
export default reducer;
