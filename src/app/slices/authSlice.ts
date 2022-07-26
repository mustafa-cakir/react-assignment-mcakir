import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from '../types';

// This is the global state. App-wide states will be store here
const initialState: IAuthState = {
    id: null,
    expiresIn: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setAuth: (state, action: PayloadAction<IAuthState>) => {
            state.id = action.payload.id;
            state.expiresIn = action.payload.expiresIn;
        },
        flushAuth: (state, action: PayloadAction<IAuthState>) => {
            state.id = null;
            state.expiresIn = null;
        },
    },
});

const { reducer: userReducer, actions } = authSlice;

export const { setAuth, flushAuth } = actions;

export default userReducer;
