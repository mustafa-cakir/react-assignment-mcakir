import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import LayoutButtons from '../index';

describe('Layout Buttons', () => {
    it('should render the component properly', () => {
        render(<LayoutButtons />);
        expect(screen.getByTestId('layout-buttons')).toBeInTheDocument();
    });
    it('should grid active case properly', () => {
        render(<LayoutButtons />, {
            preloadedState: {
                products: {
                    layout: 'grid',
                },
            },
        });
        expect(screen.getByTestId('grid')).toHaveClass('is-active');
    });
    it('should list active case properly', () => {
        render(<LayoutButtons />, {
            preloadedState: {
                products: {
                    layout: 'list',
                },
            },
        });
        expect(screen.getByTestId('list')).toHaveClass('is-active');
    });
    it('should handle the changing properly', () => {
        render(<LayoutButtons />, {
            preloadedState: {
                products: {
                    layout: 'list',
                },
            },
        });
        expect(screen.getByTestId('list')).toHaveClass('is-active');
        fireEvent.click(screen.getByTestId('grid'));
        expect(screen.getByTestId('grid')).toHaveClass('is-active');
    });
});
