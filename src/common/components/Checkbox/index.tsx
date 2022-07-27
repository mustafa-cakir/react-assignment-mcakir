import React from 'react';
import Icons from '../Icons';
import './Style.scss';

type Prop = {
    checked?: boolean;
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = ({ checked, label, onChange }: Prop) => {
    return (
        <label className={`checkbox ${checked ? 'is-checked' : ''}`} data-testid="checkbox">
            <input type="checkbox" checked={checked} onChange={onChange} data-testid="checkbox-input" />
            <span className="square">
                <Icons name="check" />
            </span>
            <span>{label}</span>
        </label>
    );
};

Checkbox.defaultProps = {
    checked: false,
};

export default Checkbox;
