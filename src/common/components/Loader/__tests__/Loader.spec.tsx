import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import Loader from '../index';

describe('Loader Common Component', () => {
    it('should render the component', () => {
        render(<Loader />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
});
