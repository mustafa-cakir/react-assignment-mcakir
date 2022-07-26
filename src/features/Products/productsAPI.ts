import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../app/types';
import { fetchService } from '../../common/services/fetch';
import { API_GET_DEVICES, API_PUT_DEVICE_BY_ID } from '../../common/constants';
import { isTest, simulateFetchWithDelay } from '../../common/utils';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getProducts = createAsyncThunk('get-products-list', async (undefined, { rejectWithValue }) => {
    try {
        // Simulate the server response delay (except test -- to have the tests run faster)
        if (!isTest) await simulateFetchWithDelay();

        const response = await fetchService.get<IProduct[]>(API_GET_DEVICES);
        return response.data;
    } catch (error: any) {
        if (error.response) return rejectWithValue(error.response.data);
        return rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.');
    }
});

export const updateProduct = createAsyncThunk('get-products-list', async (data: IProduct, { rejectWithValue }) => {
    try {
        // Simulate the server response delay (except test -- to have the tests run faster)
        if (!isTest) await simulateFetchWithDelay();
        const { id, ...putData } = data;
        const response = await fetchService.put<IProduct>(`${API_PUT_DEVICE_BY_ID}/${id}`, putData);
        return response.data;
    } catch (error: any) {
        if (error.response) return rejectWithValue(error.response.data);
        return rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.');
    }
});

export const deleteProduct = createAsyncThunk('get-products-list', async (id: number, { rejectWithValue }) => {
    try {
        // Simulate the server response delay (except test -- to have the tests run faster)
        if (!isTest) await simulateFetchWithDelay();
        const response = await fetchService.delete<{ id: number }>(`${API_PUT_DEVICE_BY_ID}/${id}`);
        return response.data.id;
    } catch (error: any) {
        if (error.response) return rejectWithValue(error.response.data);
        return rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.');
    }
});
