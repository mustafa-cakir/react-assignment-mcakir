import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../../features/login/loginSlice';
import counterReducer from '../../features/counter/counterSlice';

const rootReducer = {
    login: loginReducer,
    counter: counterReducer,
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
