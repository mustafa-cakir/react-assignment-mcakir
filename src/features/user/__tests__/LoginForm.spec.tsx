import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import LoginForm from '../LoginForm';
import { render } from '../../../app/testWrapper';

describe('LoginForm features', () => {
    it('should render the component properly', () => {
        render(<LoginForm />);
        expect(screen.getByTestId('login-form')).toBeInTheDocument();
    });
    it('should include the password and username fields', () => {
        render(<LoginForm />);
        expect(screen.getByTestId('input-name')).toBeInTheDocument();
        expect(screen.getByTestId('input-password')).toBeInTheDocument();
    });
    it('should include the submit button', () => {
        render(<LoginForm />);
        expect(screen.getByText('Login')).toBeInTheDocument();
    });
    it('should show the validity if the form is submitted while input fields are empty', () => {
        render(<LoginForm />);
        fireEvent.click(screen.getByText('Login'));

        expect(screen.getByTestId('input-name')).toBeInvalid();
        expect(screen.getByTestId('input-password')).toBeInvalid();
    });
});
