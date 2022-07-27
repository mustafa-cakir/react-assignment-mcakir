import { IProduct, IProductsState, IUserState } from '../../../app/types';
import productsReducer, {
    closeUpdateProductModal,
    openUpdateProductModal,
    resetAddStates,
    setLayout,
} from '../productsSlice';
import update from 'immutability-helper';

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

describe('Products Reducer', () => {
    const initialState: IProductsState = {
        products: [],
        isLoading: false,
        error: null,
        layout: 'grid',
        add: {
            isSuccess: false,
            error: null,
            isLoading: false,
        },
        update: {
            isSuccess: false,
            product: null,
            error: null,
            isLoading: false,
        },
        delete: {
            loadingProductId: null,
        },
    };

    it('should handle initial state', () => {
        expect(productsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should reset add state properly', () => {
        const mock = productsReducer(update(initialState, { add: { isSuccess: { $set: true } } }), resetAddStates());
        expect(mock.add.isSuccess).toBeFalsy();
    });

    it('should open update product modal properly', () => {
        const mock = productsReducer(initialState, openUpdateProductModal(mockProducts[0]));
        expect(mock.update.product?.id).toBe(mockProducts[0].id);
        expect(mock.update.product?.material).toBe(mockProducts[0].material);
    });
    it('should close update product modal properly', () => {
        const mock = productsReducer(
            update(initialState, { update: { product: { $set: mockProducts[0] } } }),
            closeUpdateProductModal(),
        );
        expect(mock.update.product).toBeNull();
    });
});
