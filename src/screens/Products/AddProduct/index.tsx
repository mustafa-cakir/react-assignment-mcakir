import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import Alert from '../../../common/components/Alert';
import Input from '../../../common/components/Input';
import Button from '../../../common/components/Button';
import { addProduct } from '../../../features/Products/productsAPI';
import Checkbox from '../../../common/components/Checkbox';
import { URL_PRODUCTS_LIST } from '../../../common/constants';
import Icons from '../../../common/components/Icons';
import { resetAddStates } from '../../../features/Products/productsSlice';

const AddProduct = () => {
    const dispatch = useAppDispatch();
    const { isLoading, error, isSuccess } = useAppSelector(redux => redux.products.add);

    // form fields
    const [title, setTitle] = useState('');
    const [material, setMaterial] = useState('');
    const [enabled, setEnabled] = useState(false);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(addProduct({ title, material, enabled })).then(({ type }) => {
            if (type === 'add-product/fulfilled') {
                // if product is added successfully, clear the input fields
                setTitle('');
                setMaterial('');
                setEnabled(false);
            }
        });
    };

    useEffect(() => {
        return () => {
            // reset the redux states when component gets unmounted (isLoading, error, isSuccess)
            dispatch(resetAddStates());
        };
    }, [dispatch]);

    return (
        <>
            <h1 className="my-4">Add Product</h1>
            <Link to={URL_PRODUCTS_LIST} className="ui-link size-tiny secondary">
                <Icons name="chevron-left" /> Go Back
            </Link>
            <hr />
            <div className="ui-card">
                {error && <Alert type="error" message={error} />}
                {isSuccess && <Alert type="success" message="Product successfully added." />}
                <form onSubmit={onSubmitHandler}>
                    <div className="my-3">
                        <Input
                            name="title"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            label="Title"
                        />
                    </div>
                    <div className="my-3">
                        <Input
                            name="material"
                            value={material}
                            onChange={event => setMaterial(event.target.value)}
                            label="Material"
                        />
                    </div>
                    <div className="my-4">
                        <Checkbox
                            checked={enabled}
                            label="Is enabled?"
                            onChange={event => setEnabled(event.target.checked)}
                        />
                    </div>
                    <div className="mt-4">
                        <Button type="submit" title="Add Product" disabled={isLoading} isLoading={isLoading}>
                            Add Product
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
