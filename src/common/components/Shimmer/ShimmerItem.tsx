import React from 'react';

type Prop = {
    maxWidth?: undefined | number | string;
    width?: undefined | number | string;
    height?: undefined | number | string;
    marginBottom?: undefined | number;
    className?: undefined | string;
};

const ShimmerItem = ({ height, width, maxWidth, marginBottom, className }: Prop) => {
    return (
        <div
            className={`shimmer-item ${className || ''}`}
            style={{ width, height, marginBottom, maxWidth }}
            data-testid="shimmer-item"
        />
    );
};

ShimmerItem.defaultProps = {
    maxWidth: undefined,
    width: undefined,
    height: undefined,
    marginBottom: undefined,
    className: null,
};

export default ShimmerItem;
