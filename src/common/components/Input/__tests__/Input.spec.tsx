import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import Input from '../index';

describe('Input Common Component', () => {
    it('should render the component properly', () => {
        render(<Input label="some label" name="sample" />);
        expect(screen.getByTestId('input-sample')).toBeInTheDocument();
    });
    it('should display the value as typing', () => {
        render(<Input label="some label" name="sample" />);
        const input = screen.getByTestId('input-sample');
        fireEvent.change(input, { target: { value: 'Some text inside' } });
        expect(screen.getByTestId('input-sample')).toHaveValue('Some text inside');
    });
    it('should fire the onChange event as typing', () => {
        const fn = jest.fn();
        render(<Input label="some label" name="sample" onChange={fn} />);
        const input = screen.getByTestId('input-sample');
        fireEvent.change(input, { target: { value: 'Some text inside' } });
        expect(fn).toBeCalled();
    });
    it('should render the props properly', () => {
        const fn = jest.fn();
        render(<Input label="some label" name="sample" onChange={fn} disabled type="password" value="default value" />);
        const input = screen.getByTestId('input-sample');
        expect(input).toBeDisabled();
        expect(input).toHaveAttribute('type', 'password');
        expect(input).toHaveValue('default value');
    });
});
