import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { getProducts } from '../../../features/Products/productsAPI';
import LayoutButtons from '../../../features/Products/LayoutButtons';
import Icons from '../../../common/components/Icons';
import { URL_PRODUCTS_ADD } from '../../../common/constants';
import ProductsContent from '../../../features/Products/ProductsContent';

const ListProducts = () => {
    const { products } = useAppSelector(redux => redux.products);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

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
            <ProductsContent />
        </>
    );
};

export default ListProducts;
