import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import { IProduct } from '../../../../app/types';
import UpdateProductModal from '../index';

const mockProduct: IProduct = {
    enabled: true,
    id: 1,
    material: 'Plastic',
    title: 'Plastic Cup',
};

describe('Update Product Modal', () => {
    it('should render the component properly', () => {
        render(<UpdateProductModal product={mockProduct} />);
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
    it('should handle the error case properly', () => {
        render(<UpdateProductModal product={mockProduct} />, {
            preloadedState: {
                products: {
                    update: {
                        isSuccess: false,
                        isLoading: false,
                        error: 'some error message here',
                    },
                },
            },
        });
        expect(screen.getByText('some error message here')).toBeInTheDocument();
    });
    it('should handle the success case properly', () => {
        render(<UpdateProductModal product={mockProduct} />, {
            preloadedState: {
                products: {
                    update: {
                        isSuccess: true,
                        isLoading: false,
                        error: null,
                    },
                },
            },
        });
        expect(screen.getByText('Product successfully updated.')).toBeInTheDocument();
    });
    it('should handle the success case properly', () => {
        render(<UpdateProductModal product={mockProduct} />, {
            preloadedState: {
                products: {
                    update: {
                        isSuccess: false,
                        isLoading: true,
                        error: null,
                    },
                },
            },
        });
        expect(screen.getByTestId('button-update')).toHaveClass('is-loading');
    });
});
