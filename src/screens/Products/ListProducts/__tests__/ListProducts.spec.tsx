import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import ListProducts from '../index';

describe('List Products Screen', () => {
    it('should render page without any error', () => {
        render(<ListProducts />);
        expect(screen.getByText('Products')).toBeInTheDocument();
    });
});
