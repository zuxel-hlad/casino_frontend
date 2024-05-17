import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
    name: string;
    nickname: string;
}

const initialState: IUserState = {
    nickname: 'default nick',
    name: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    selectors: {
        selectUserName: state => state.nickname,
    },
});

const { reducer, selectors } = userSlice;
export const { selectUserName } = selectors;
export default reducer;
