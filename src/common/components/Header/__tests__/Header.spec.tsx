import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import Header from '../index';

describe('Header Component', () => {
    it('should render header component without any error', () => {
        render(<Header />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });
    it('should display logo in the header', () => {
        render(<Header />);
        expect(screen.getByTestId('header-logo')).toBeInTheDocument();
    });
    it('should display the logout button if user is logged in', () => {
        render(<Header />, {
            preloadedState: {
                user: {
                    isAuthenticated: true,
                },
            },
        });
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });
});
