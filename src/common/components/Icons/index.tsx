import React from 'react';

type Props = {
    name: string;
};

const Icons = ({ name }: Props) => {
    if (!name) return null;
    return <i className={`icons icons-${name}`} data-testid="icons" />;
};

export default Icons;
