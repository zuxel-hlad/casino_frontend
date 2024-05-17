import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '@/entities/user/api/userApi';
import userSlice from '@/entities/user/slices/userSlice';
import walletSlice from '@/entities/wallet/slices/walletSlice';
import rouletteSlice from '@/games/roulette/slices/rouletteSlice';
import rouletteSpinSlice from '@/games/roulette/slices/rouletteSpinSlice';
import slotSlice from '@/games/slots/slices/slotSlice';
import hummerSlice from '@/games/hummer/slices/hummerSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        wallet: walletSlice,
        roulette: rouletteSlice,
        rouletteSpin: rouletteSpinSlice,
        slot: slotSlice,
        hummer: hummerSlice,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
