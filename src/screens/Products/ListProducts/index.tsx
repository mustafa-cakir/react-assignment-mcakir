import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { getProducts } from '../../../features/Products/productsAPI';
import ListProductsLoading from './ListProductsLoading';
import Alert from '../../../common/components/Alert';
import ProductItem from './ProductItem';
import LayoutButtons from './LayoutButtons';
import Icons from '../../../common/components/Icons';
import { URL_PRODUCTS_ADD } from '../../../common/constants';
import UpdateProductModal from './UpdateProductModal';

const ListProducts = () => {
    const { products, isLoading, error, layout, update } = useAppSelector(redux => redux.products);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const classNames = useMemo(() => {
        return {
            productCol: layout === 'grid' ? 'col col-12 col-md-6 col-lg-4' : 'col col-12',
        };
    }, [layout]);

    return (
        <>
            <div className="d-flex align-items-center my-4">
                <div className="d-flex flex-grow-1 align-items-center">
                    <h1 className="m-0">Products</h1>
                    <div className="ml-3">
                        <Link to={URL_PRODUCTS_ADD} title="Add Product" className="ui-button secondary size-tiny">
                            <Icons name="plus" />
                            <span className="ml-1">Add Product</span>
                        </Link>
                    </div>
                </div>
                {products?.length > 0 && <LayoutButtons />}
            </div>
            <hr />
            {isLoading ? (
                <ListProductsLoading />
            ) : (
                <>
                    {error && <Alert type="error" message={error} />}
                    {products?.length === 0 && <Alert type="info" message="No products found to display." />}
                    {products?.length > 0 && (
                        <div className="products" data-testid="list-products">
                            <div className="row">
                                {products.map(product => (
                                    <div className={classNames.productCol} key={product.id}>
                                        <ProductItem product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {update.product && <UpdateProductModal product={update.product} />}
                </>
            )}
        </>
    );
};

export default ListProducts;
