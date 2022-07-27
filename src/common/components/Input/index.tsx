import React from 'react';
import './Style.scss';

type Prop = {
    label: string;
    // optionals
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string | undefined;
    required?: boolean;
    type?: 'text' | 'password';
    value?: string;
    disabled?: boolean;
};

const Input = ({ label, name, type, value, required, onChange, disabled }: Prop) => {
    return (
        <div className="input-wrapper">
            <input
                type={type}
                name={name}
                data-testid={`input-${name}`}
                value={value}
                required={required}
                className={value ? 'has-value' : ''}
                onChange={onChange}
                disabled={disabled}
            />
            <div className="label">{label}</div>
        </div>
    );
};

Input.defaultProps = {
    required: true,
    type: 'text',
    value: '',
    disabled: false,
    onChange: () => {},
    name: '',
};

export default Input;
