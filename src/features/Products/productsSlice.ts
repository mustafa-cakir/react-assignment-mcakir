import update from 'immutability-helper';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth, IProduct, IProductsState } from '../../app/types';
import { removeBearerFromFetchService, setBearerToFetchService } from '../../common/services/fetch';
import { getTokenFromCookie, removeTokenFromCookie, setTokenToCookie } from '../../common/utils';
import { deleteProduct, getProducts, updateProduct } from './productsAPI';

// This is the global state. App-wide states will be store here
const initialState: IProductsState = {
    products: [],
    isLoading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products-slice',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        //
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: builder => {
        builder
            // getProducts async action handler
            .addCase(getProducts.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            // update async action handlers
            .addCase(updateProduct.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action: PayloadAction<IProduct>) => {
                state.isLoading = false;
                const index = state.products.findIndex(x => x.id === action.payload.id);
                state.products = update(state.products, { [index]: { $set: action.payload } });
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            // update async action handlers
            .addCase(deleteProduct.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<number>) => {
                state.isLoading = false;
                const index = state.products.findIndex(x => x.id === action.payload);
                state.products = update(state.products, { $splice: [[index, 1]] });
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

const { reducer: productsReducer } = productsSlice;

export default productsReducer;
