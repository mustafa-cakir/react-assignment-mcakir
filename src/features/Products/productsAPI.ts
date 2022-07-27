import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct, IProductAdd } from '../../app/types';
import { fetchService } from '../../common/services/fetch';
import { API_DEVICES } from '../../common/constants';
import { isTest, simulateFetchWithDelay } from '../../common/utils';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getProducts = createAsyncThunk('get-products', async (undefined, { rejectWithValue }) => {
    try {
        // Simulate the server response delay (except test -- to have the tests run faster)
        if (!isTest) await simulateFetchWithDelay();

        const response = await fetchService.get<IProduct[]>(API_DEVICES);
        return response.data;
    } catch (error: any) {
        if (error.response) return rejectWithValue(error.response.data);
        return rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.');
    }
});

export const addProduct = createAsyncThunk('add-product', async (data: IProductAdd, { rejectWithValue }) => {
    try {
        // Simulate the server response delay (except test -- to have the tests run faster)
        if (!isTest) await simulateFetchWithDelay();
        const response = await fetchService.post<IProduct>(API_DEVICES, data);
        return response.data;
    } catch (error: any) {
        if (error.response) return rejectWithValue(error.response.data);
        return rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.');
    }
});

export const updateProduct = createAsyncThunk('update-product', async (data: IProduct, { rejectWithValue }) => {
    try {
        // Simulate the server response delay (except test -- to have the tests run faster)
        if (!isTest) await simulateFetchWithDelay();
        const { id, ...putData } = data;
        const response = await fetchService.put<IProduct>(`${API_DEVICES}/${id}`, putData);
        return response.data;
    } catch (error: any) {
        if (error.response) return rejectWithValue(error.response.data);
        return rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.');
    }
});

export const deleteProduct = createAsyncThunk('delete-product', async (id: number, { rejectWithValue }) => {
    try {
        // Simulate the server response delay (except test -- to have the tests run faster)
        if (!isTest) await simulateFetchWithDelay();
        const response = await fetchService.delete<{ id: number }>(`${API_DEVICES}/${id}`);
        return response.data.id;
    } catch (error: any) {
        if (error.response) return rejectWithValue(error.response.data);
        return rejectWithValue(error?.message || 'Opps there seems to be an error. Please try again.');
    }
});
