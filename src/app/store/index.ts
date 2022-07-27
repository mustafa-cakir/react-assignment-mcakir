import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../../features/user/userSlice';
import productsReducer from '../../features/Products/productsSlice';

const rootReducer = {
    user: userReducer,
    products: productsReducer,
};

// makeSure() is defined to make store creation in the test.
// We need `store` on provider in the TestWrapper, with preloadedState
export const makeStoreForTesting = (preloadedState?: any) =>
    configureStore({
        reducer: rootReducer,
        ...(preloadedState && { preloadedState }),
    });

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
