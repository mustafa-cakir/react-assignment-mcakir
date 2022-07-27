import React, { useState } from 'react';
import Modal from '../../../common/components/Modal';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { closeUpdateProductModal } from '../productsSlice';
import Alert from '../../../common/components/Alert';
import Input from '../../../common/components/Input';
import Checkbox from '../../../common/components/Checkbox';
import Button from '../../../common/components/Button';
import { updateProduct } from '../productsAPI';
import { IProduct } from '../../../app/types';

type Prop = {
    product: IProduct;
};

const UpdateProductModal = ({ product }: Prop) => {
    const { error, isLoading, isSuccess } = useAppSelector(redux => redux.products.update);
    const dispatch = useAppDispatch();

    // form fields
    const [title, setTitle] = useState(product.title);
    const [material, setMaterial] = useState(product.material);
    const [enabled, setEnabled] = useState(product.enabled);

    const closeHandler = () => {
        dispatch(closeUpdateProductModal());
    };

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(updateProduct({ ...product, title, material, enabled }));
    };

    return (
        <Modal closeHandler={closeHandler} title="Update Product">
            <>
                {error && <Alert type="error" message={error} />}
                {isSuccess && <Alert type="success" message="Product successfully updated." />}
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
                        <Button
                            name="update"
                            type="submit"
                            title="Update Product"
                            disabled={isLoading}
                            isLoading={isLoading}
                        >
                            Update
                        </Button>
                    </div>
                </form>
            </>
        </Modal>
    );
};

export default UpdateProductModal;
