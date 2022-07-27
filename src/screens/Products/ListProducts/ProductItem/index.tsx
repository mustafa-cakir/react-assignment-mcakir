import React, { useMemo } from 'react';
import noImage from '../../../../assets/images/no-image.png';
import { IProduct } from '../../../../app/types';
import Icons from '../../../../common/components/Icons';
import { useAppDispatch, useAppSelector } from '../../../../common/hooks';
import Button from '../../../../common/components/Button';
import { openUpdateProductModal } from '../../../../features/Products/productsSlice';
import './Style.scss';
import { deleteProduct } from '../../../../features/Products/productsAPI';

type Prop = {
    product: IProduct;
};

const ProductItem = ({ product }: Prop) => {
    const dispatch = useAppDispatch();
    const {
        layout,
        delete: { loadingProductId },
    } = useAppSelector(redux => redux.products);

    const { id, title, material } = product;

    const getClassNameForImageCol = useMemo(() => {
        if (layout === 'grid') return 'col col-12 mb-3';
        return 'col col-auto col-picture';
    }, [layout]);

    const getClassNameForActionButtonsCol = useMemo(() => {
        if (layout === 'grid') return 'col col-12 mt-3';
        return 'col col-auto';
    }, [layout]);

    const editButtonClickHandler = () => {
        dispatch(openUpdateProductModal(product));
    };

    const removeButtonClickHandler = () => {
        dispatch(deleteProduct(product.id));
    };

    return (
        <div className="product ui-card" data-testid="product">
            <div className="row">
                <div className={getClassNameForImageCol}>
                    <img src={noImage} alt={title} />
                </div>
                <div className="col">
                    <h3 className="mt-0 mb-2">{title}</h3>
                    <div className="row mb-2">
                        <div className="col col-spec-left">
                            <span className="ui-text-muted">Id:</span>
                        </div>
                        <div className="col">{id}</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col col-spec-left ui-text-muted">
                            <span className="ui-text-muted">Material:</span>
                        </div>
                        <div className="col">{material}</div>
                    </div>
                </div>
                <div className={getClassNameForActionButtonsCol}>
                    <Button title="Edit" onClick={editButtonClickHandler} layout="secondary" size="tiny">
                        <Icons name="edit" />
                        <span className="ml-2">Edit</span>
                    </Button>
                    <span className="ml-2">
                        <Button
                            title="Edit"
                            onClick={removeButtonClickHandler}
                            layout="red"
                            size="tiny"
                            isLoading={loadingProductId === product.id}
                            disabled={loadingProductId === product.id}
                        >
                            <Icons name="trash-2" />
                            <span className="ml-2">Remove</span>
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
