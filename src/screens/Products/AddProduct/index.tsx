import React from 'react';
import { Link } from 'react-router-dom';
import { URL_PRODUCTS_LIST } from '../../../common/constants';
import Icons from '../../../common/components/Icons';
import AddProductForm from '../../../features/Products/AddProductForm';

const AddProduct = () => {
    return (
        <>
            <h1 className="my-4">Add Product</h1>
            <Link to={URL_PRODUCTS_LIST} className="ui-link size-tiny secondary">
                <Icons name="chevron-left" /> Go Back
            </Link>
            <hr />
            <div className="ui-card">
                <AddProductForm />
            </div>
        </>
    );
};

export default AddProduct;
