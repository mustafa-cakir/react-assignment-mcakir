import React, { useMemo } from 'react';
import Icons from '../Icons';
import './Style.scss';

type Props = {
    type: 'info' | 'error' | 'success';
    message: string;
};

const Alert = ({ type, message }: Props) => {
    const iconName = useMemo<string>(() => {
        switch (type) {
            case 'info':
                return 'info';
            case 'error':
            default:
                return '';
        }
    }, [type]);

    if (!type || !message) return null;

    return (
        <div className={`alert type-${type}`} data-testid="alert">
            <Icons name={iconName} />
            <div className="message" data-testid="alert-message">
                {message}
            </div>
        </div>
    );
};

export default Alert;
