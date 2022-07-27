import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import AddProductForm from '../index';

describe('Add product form', () => {
    it('should render the component properly', () => {
        render(<AddProductForm />);
        expect(screen.getByText('Add Product')).toBeInTheDocument();
    });
    it('should include the material, title and the checkbox fields', () => {
        render(<AddProductForm />);
        expect(screen.getByTestId('input-material')).toBeInTheDocument();
        expect(screen.getByTestId('input-title')).toBeInTheDocument();
        expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    });
    it('should show the validity if the form is submitted while input fields are empty', () => {
        render(<AddProductForm />);
        fireEvent.click(screen.getByText('Add Product'));

        expect(screen.getByTestId('input-material')).toBeInvalid();
        expect(screen.getByTestId('input-title')).toBeInvalid();
    });
    it('should handle the error case properly', () => {
        render(<AddProductForm />, {
            preloadedState: {
                products: {
                    add: {
                        isSuccess: false,
                        product: null,
                        isLoading: false,
                        error: 'some error here',
                    },
                },
            },
        });
        expect(screen.getByText('some error here')).toBeInTheDocument();
    });
    it('should handle the success case properly', () => {
        render(<AddProductForm />, {
            preloadedState: {
                products: {
                    add: {
                        isSuccess: true,
                        product: null,
                        isLoading: false,
                        error: null,
                    },
                },
            },
        });
        expect(screen.getByText('Product successfully added.')).toBeInTheDocument();
    });
    it('should handle the loading case properly', () => {
        render(<AddProductForm />, {
            preloadedState: {
                products: {
                    add: {
                        isSuccess: false,
                        product: null,
                        isLoading: true,
                        error: null,
                    },
                },
            },
        });
        expect(screen.getByTestId('button-add')).toHaveClass('is-loading');
    });
});
