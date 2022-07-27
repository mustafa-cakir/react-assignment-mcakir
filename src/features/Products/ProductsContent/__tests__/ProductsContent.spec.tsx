import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import { IProduct } from '../../../../app/types';
import ProductsContent from '../index';

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

describe('Products Content', () => {
    it('should render the component properly', () => {
        render(<ProductsContent />, {
            preloadedState: {
                products: {
                    products: mockProducts,
                    isLoading: false,
                    error: null,
                    update: {
                        //
                    },
                    delete: {
                        //
                    },
                    add: {
                        //
                    },
                },
            },
        });
        expect(screen.getByTestId('list-products')).toBeInTheDocument();
    });

    it('should render all the available products', () => {
        render(<ProductsContent />, {
            preloadedState: {
                products: {
                    products: mockProducts,
                    isLoading: false,
                    error: null,
                    update: {
                        //
                    },
                    delete: {
                        //
                    },
                    add: {
                        //
                    },
                },
            },
        });
        expect(screen.getAllByTestId('product').length).toBe(mockProducts.length);
    });

    it('should handle the loading case properly', () => {
        render(<ProductsContent />, {
            preloadedState: {
                products: {
                    products: mockProducts,
                    isLoading: true,
                    error: null,
                    update: {
                        //
                    },
                    delete: {
                        //
                    },
                    add: {
                        //
                    },
                },
            },
        });
        expect(screen.getByTestId('shimmer')).toBeInTheDocument();
    });
    it('should handle the error case properly', () => {
        render(<ProductsContent />, {
            preloadedState: {
                products: {
                    products: mockProducts,
                    isLoading: false,
                    error: 'some error message here',
                    update: {
                        //
                    },
                    delete: {
                        //
                    },
                    add: {
                        //
                    },
                },
            },
        });
        expect(screen.getByText('some error message here')).toBeInTheDocument();
    });

    it('should handle the empty state properly', () => {
        render(<ProductsContent />, {
            preloadedState: {
                products: {
                    products: [],
                    isLoading: false,
                    error: null,
                    update: {
                        //
                    },
                    delete: {
                        //
                    },
                    add: {
                        //
                    },
                },
            },
        });
        expect(screen.getByText('No products found to display.')).toBeInTheDocument();
    });
});
