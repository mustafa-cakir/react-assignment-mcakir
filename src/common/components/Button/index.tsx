import React from 'react';
import './Style.scss';
import Loader from '../Loader';

type Prop = {
    title: string;
    children: string | JSX.Element | JSX.Element[];
    // optionals
    layout?: 'primary' | 'secondary';
    size?: 'normal' | 'large' | 'tiny';
    name?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
    isFullWidth?: boolean;
    isLoading?: boolean;
};

const Button = ({ title, layout, size, name, type, onClick, disabled, isLoading, isFullWidth, children }: Prop) => {
    return (
        <button
            className={`button ${layout} size-${size} ${isLoading ? 'is-loading' : ''} ${
                isFullWidth ? 'is-fullwidth' : ''
            }`}
            type={type === 'submit' ? 'submit' : 'button'}
            aria-label={title}
            title={title}
            data-testid={`button-${name}`}
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <>
                    <span>{children}</span>
                    <Loader size="small" />
                </>
            ) : (
                children
            )}
        </button>
    );
};

Button.defaultProps = {
    layout: 'primary',
    size: 'normal',
    name: 'button',
    type: 'button',
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    onClick: undefined,
};

export default Button;
