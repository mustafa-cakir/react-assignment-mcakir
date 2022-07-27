import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import Button from '../index';

describe('Button Common Component', () => {
    it('should render button component properly', () => {
        render(
            <Button title="some title" name="sample">
                Some title
            </Button>,
        );
        expect(screen.getByText('Some title')).toBeInTheDocument();
    });
    it('should button component display children properly', () => {
        render(
            <Button title="some title" name="sample">
                Some title
            </Button>,
        );
        const button = screen.getByTestId('button-sample');
        expect(button).toHaveTextContent('Some title');
    });
    it('should trigger onChange event once it is clicked', () => {
        const fn = jest.fn();
        render(
            <Button title="some title" name="sample" onClick={fn}>
                Some title
            </Button>,
        );
        const button = screen.getByTestId('button-sample');
        fireEvent.click(button);
        expect(fn).toBeCalled();
    });
    it('should display the loading animation properly', () => {
        render(
            <Button title="some title" name="sample" isLoading>
                Some title
            </Button>,
        );
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
    it('should type prop rendered properly', () => {
        render(
            <Button type="submit" title="some title" name="sample" isLoading>
                Some title
            </Button>,
        );
        expect(screen.getByTestId('button-sample')).toHaveAttribute('type', 'submit');
    });
    it('should ttitle attribute render properly', () => {
        render(
            <Button type="submit" title="some title" name="sample" isLoading>
                Some title
            </Button>,
        );
        expect(screen.getByTestId('button-sample')).toHaveAttribute('title', 'some title');
        expect(screen.getByTestId('button-sample')).toHaveAttribute('aria-label', 'some title');
    });
});
