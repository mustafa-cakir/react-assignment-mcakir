import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import Checkbox from '../index';

describe('Checkbox Component', () => {
    const mockFn = jest.fn();
    it('should render the component properly', () => {
        render(<Checkbox label="label here" checked onChange={mockFn} />);
        expect(screen.getByTestId('checkbox')).toBeInTheDocument();
        expect(screen.getByTestId('checkbox-input')).toBeChecked();
    });

    it('should trigger the onChange event upon typing', () => {
        render(<Checkbox label="label here" onChange={mockFn} />);
        const checkbox = screen.getByTestId('checkbox');
        fireEvent.click(checkbox);
        expect(mockFn).toBeCalled();
    });

    it('should reflect the default value', () => {
        render(<Checkbox label="label here" checked onChange={mockFn} />);
        expect(screen.getByTestId('checkbox')).toHaveClass('is-checked');
        expect(screen.getByTestId('checkbox-input')).toBeChecked();
    });
});
