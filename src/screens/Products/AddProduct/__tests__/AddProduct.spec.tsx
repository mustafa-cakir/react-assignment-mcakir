import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import AddProduct from '../index';

describe('Add Product Screen', () => {
    it('should render page without any error', () => {
        render(<AddProduct />);
        expect(screen.getAllByText('Add Product').length).toBeGreaterThan(1);
    });
});
