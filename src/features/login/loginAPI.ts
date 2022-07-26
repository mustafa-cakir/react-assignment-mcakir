import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth, ILogin } from '../../app/types';
import { fetchService } from '../../common/services/fetch';
import { API_POST_LOGIN } from '../../common/constants';
import { isTest, setTokenToCookie, simulateFetchWithDelay } from '../../common/utils';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const login = createAsyncThunk('login', async (data: ILogin, { rejectWithValue }) => {
    try {
        // Simulate the server response delay (except test -- to have the tests run faster)
        if (!isTest) await simulateFetchWithDelay();

        const response = await fetchService.post<IAuth>(API_POST_LOGIN, data);
        setTokenToCookie(response.data.id, response.data.expiresIn);
        return response.data; // return the qa
    } catch (error: any) {
        if (error.response) return rejectWithValue(error.response.data);
        return rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.');
    }
});
