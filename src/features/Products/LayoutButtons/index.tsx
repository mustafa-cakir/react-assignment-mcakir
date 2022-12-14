import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { setLayout } from '../productsSlice';
import Icons from '../../../common/components/Icons';
import './Style.scss';

const LayoutButtons = () => {
    const { layout } = useAppSelector(redux => redux.products);
    const dispatch = useAppDispatch();

    const onGridClickHandler = () => {
        dispatch(setLayout('grid'));
    };

    const onListClickHandler = () => {
        dispatch(setLayout('list'));
    };

    return (
        <div className="layout-buttons" data-testid="layout-buttons">
            <button
                type="button"
                data-testid="grid"
                onClick={onGridClickHandler}
                className={layout === 'grid' ? 'is-active' : ''}
            >
                <Icons name="grid" />
            </button>
            <button
                type="button"
                data-testid="list"
                onClick={onListClickHandler}
                className={layout === 'list' ? 'is-active' : ''}
            >
                <Icons name="list" />
            </button>
        </div>
    );
};

export default LayoutButtons;
