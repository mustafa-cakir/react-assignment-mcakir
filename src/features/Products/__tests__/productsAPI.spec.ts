import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { ILogin, IProduct, IProductAdd } from '../../../app/types';
import { API_DEVICES, BASE_API_URL } from '../../../common/constants';
import { makeStoreForTesting } from '../../../app/store';
import { addProduct, deleteProduct, getProducts, updateProduct } from '../productsAPI';

const mockProducts: IProduct[] = [
    {
        enabled: true,
        id: 1,
        material: 'Plastic',
        title: 'Plastic Cup',
    },
    {
        enabled: true,
        id: 2,
        material: 'Wood',
        title: 'Chair',
    },
];

const server = setupServer(
    rest.get(BASE_API_URL + API_DEVICES, (req, res, ctx) =>
        // return mock data
        res(ctx.json(mockProducts)),
    ),
    rest.post(BASE_API_URL + API_DEVICES, (req, res, ctx) =>
        // return mock data
        res(ctx.json(mockProducts[0])),
    ),
    rest.put(`${BASE_API_URL + API_DEVICES}/1`, (req, res, ctx) =>
        // return mock data
        res(ctx.json({ ...mockProducts[0], material: 'some new material' })),
    ),
    rest.delete(`${BASE_API_URL + API_DEVICES}/1`, (req, res, ctx) =>
        // return mock data
        res(ctx.json(mockProducts[0].id)),
    ),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Products Api', () => {
    it('should fetch products properly', async () => {
        // pre-setup for the case
        const mockStore = makeStoreForTesting();
        await mockStore.dispatch(getProducts());
        const state = mockStore.getState();

        // make the assertions
        expect(state.products.products.length).toBe(mockProducts.length);
        expect(state.products.products[1].material).toBe(mockProducts[1].material);
        expect(state.products.isLoading).toBeFalsy();
        expect(state.products.error).toBeFalsy();
    });

    it('should add product properly', async () => {
        const { id, ...mockAddProduct } = mockProducts[0];
        const mockStore = makeStoreForTesting();
        await mockStore.dispatch(addProduct(mockAddProduct));
        const state = mockStore.getState();

        // make the assertions
        expect(state.products.products.length).toBe(1);
        expect(state.products.products[0].material).toBe(mockProducts[0].material);
        expect(state.products.isLoading).toBeFalsy();
        expect(state.products.error).toBeFalsy();
    });

    it('should update product properly', async () => {
        const mockStore = makeStoreForTesting({
            products: {
                products: mockProducts,
                isLoading: false,
                error: null,
                update: {
                    isSuccess: false,
                    product: null,
                    error: null,
                    isLoading: false,
                },
            },
        });
        const newProduct = { ...mockProducts[0], material: 'some new material' };
        await mockStore.dispatch(updateProduct(newProduct));
        const state = mockStore.getState();

        // make the assertions
        expect(state.products.products[0].material).toBe('some new material');
        expect(state.products.isLoading).toBeFalsy();
        expect(state.products.error).toBeFalsy();
    });
    it('should delete the product properly', async () => {
        const mockStore = makeStoreForTesting({
            products: {
                products: mockProducts,
                isLoading: false,
                error: null,
                delete: {
                    loadingProductId: null,
                },
            },
        });
        await mockStore.dispatch(deleteProduct(1));
        const state = mockStore.getState();

        // make the assertions
        expect(state.products.products.length).toBe(mockProducts.length - 1);
    });
});
