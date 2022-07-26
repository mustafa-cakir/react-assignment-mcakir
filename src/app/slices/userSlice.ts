import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../types';

// This is the global state. App-wide states will be store here
const initialState: IUserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'global',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.user = action.payload
        },
    },
});

const { reducer: userReducer, actions } = userSlice;

export const { setUser } = actions;

export default userReducer;
