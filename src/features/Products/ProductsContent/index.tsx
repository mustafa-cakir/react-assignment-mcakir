import React, { useMemo } from 'react';
import ListProductsLoading from '../ListProductsLoading';
import Alert from '../../../common/components/Alert';
import ProductItem from '../ProductItem';
import UpdateProductModal from '../UpdateProductModal';
import { useAppSelector } from '../../../common/hooks';

const ProductsContent = () => {
    const { products, isLoading, error, layout, update } = useAppSelector(redux => redux.products);

    const classNames = useMemo(() => {
        return {
            productCol: layout === 'grid' ? 'col col-12 col-md-6 col-lg-4' : 'col col-12',
        };
    }, [layout]);

    if (isLoading) return <ListProductsLoading />;
    if (error) return <Alert type="error" message={error} />;
    if (products.length === 0) return <Alert type="info" message="No products found to display." />;

    return (
        <>
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
    );
};
export default ProductsContent;
