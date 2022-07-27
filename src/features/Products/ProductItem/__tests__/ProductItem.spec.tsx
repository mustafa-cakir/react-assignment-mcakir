import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import ProductItem from '../index';
import { IProduct } from '../../../../app/types';

describe('Product Item', () => {
    const mockProduct: IProduct = {
        enabled: true,
        id: 1,
        material: 'Plastic',
        title: 'Plastic Cup',
    };

    it('should render the component properly', () => {
        render(<ProductItem product={mockProduct} />);
        expect(screen.getByTestId('product')).toBeInTheDocument();
    });
    it('should product properties should be rendered properly', () => {
        render(<ProductItem product={mockProduct} />);
        expect(screen.getByText(mockProduct.material)).toBeInTheDocument();
        expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    });
});
