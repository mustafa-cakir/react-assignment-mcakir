import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import ListProductsLoading from '../index';

describe('List Products Loading', () => {
    it('should render the component properly', () => {
        render(<ListProductsLoading />);
        expect(screen.getByTestId('shimmer')).toBeInTheDocument();
    });
});
