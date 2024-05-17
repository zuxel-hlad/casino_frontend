import { IWallet } from '@/entities/wallet/model/Wallet';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IWallet = {
    game_balance: 5000,
};

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setBalance: (state, action: PayloadAction<number>) => {
            state.game_balance = state.game_balance + action.payload;
        },
    },
    selectors: {
        selectGameBalance: state => state.game_balance,
    },
});

const { reducer, actions, selectors } = walletSlice;
export const { selectGameBalance } = selectors;
export const { setBalance } = actions;
export default reducer;
