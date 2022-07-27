import React from 'react';
import './Style.scss';

type Prop = {
    color?: 'light' | 'dark' | 'colored';
    size?: 'normal' | 'big' | 'small';
};

const Loader = ({ color, size }: Prop) => {
    return (
        <div className="loader-container" data-testid="loader">
            <div className={`loader color-${color} size-${size}`} />
        </div>
    );
};

Loader.defaultProps = {
    color: 'light',
    size: 'normal',
};

export default Loader;
