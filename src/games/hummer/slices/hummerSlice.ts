import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IHummerPit, MOCK_PITS } from './models/Pits';

const DEFAULT_SCORE = 1000;
const START_HEALTH = 1;

export enum HummerScenes {
    MENU = 'menu',
    GAME = 'game',
}

interface IHummerState {
    scene: `${HummerScenes}`;
    pits: IHummerPit[];
    score: number;
    health: number;
    gameOver: boolean;
}

const initialState: IHummerState = {
    scene: HummerScenes.MENU,
    pits: MOCK_PITS,
    score: DEFAULT_SCORE,
    health: START_HEALTH,
    gameOver: false,
};

const hummerSlice = createSlice({
    name: 'hummer',
    initialState,
    reducers: {
        setHummerScene: (state, action: PayloadAction<HummerScenes>) => {
            state.scene = action.payload;
        },
        setHummerPits: (state, action: PayloadAction<{ currentIndex: number; state: IHummerPit['state'] }>) => {
            const newPitsState = state.pits.map((pit, pitIndex) => {
                if (action.payload.currentIndex === pitIndex) {
                    return {
                        ...pit,
                        state: action.payload.state,
                    };
                } else {
                    return pit;
                }
            });
            state.pits = newPitsState;
        },
        setHummerScore: (state, action: PayloadAction<number>) => {
            if (state.score + action.payload < 0) {
                if (state.health - 1 === 0) {
                    state.gameOver = true;
                } else {
                    state.health = state.health - 1;
                    state.score = DEFAULT_SCORE;
                }
            } else {
                state.score = state.score + action.payload;
            }
        },
    },
    selectors: {
        selectHummerScene: state => state.scene,
        selectHummerPits: state => state.pits,
        selectHummerHealth: state => state.health,
        selectHummerScore: state => state.score,
        selectHummerGameOver: state => state.gameOver,
    },
});

const { reducer, actions, selectors } = hummerSlice;
export const { setHummerScene, setHummerPits, setHummerScore } = actions;
export const { selectHummerScene, selectHummerPits, selectHummerHealth, selectHummerScore, selectHummerGameOver } =
    selectors;
export default reducer;
