import React, { useMemo } from 'react';
import Shimmer from '../../../../common/components/Shimmer';
import ShimmerItem from '../../../../common/components/Shimmer/ShimmerItem';
import { useAppSelector } from '../../../../common/hooks';

const ListProductsLoading = () => {
    const { layout } = useAppSelector(redux => redux.products);

    const classNames = useMemo(() => {
        return {
            productCol: layout === 'grid' ? 'col col-12 col-md-6 col-lg-4' : 'col col-12',
            imageCol: layout === 'grid' ? 'col col-12 mb-3' : 'col col-auto',
            buttonCol: layout === 'grid' ? 'col col-12 mt-3' : 'col col-auto',
            imageSize: {
                width: layout === 'grid' ? undefined : 200,
                height: layout === 'grid' ? 319 : 200,
            },
        };
    }, [layout]);

    return (
        <Shimmer>
            <div className="row">
                {Array.from(Array(3).keys()).map(item => (
                    <div key={item} className={classNames.productCol}>
                        <div className="ui-card mb-3">
                            <div className="row">
                                <div className={classNames.imageCol}>
                                    <ShimmerItem
                                        height={classNames.imageSize.height}
                                        width={classNames.imageSize.width}
                                        maxWidth="100%"
                                    />
                                </div>
                                <div className="col">
                                    <ShimmerItem height={18} width="50%" marginBottom={25} />
                                    <div className="row mb-2">
                                        <div className="col col-4">
                                            <ShimmerItem height={16} width="75%" />
                                        </div>
                                        <div className="col col-4">
                                            <ShimmerItem height={16} />
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col col-4">
                                            <ShimmerItem height={16} width="75%" />
                                        </div>
                                        <div className="col col-4">
                                            <ShimmerItem height={16} />
                                        </div>
                                    </div>
                                </div>
                                <div className={classNames.buttonCol}>
                                    <div className="d-flex">
                                        <ShimmerItem height={33} width={90} />
                                        <div className="ml-2">
                                            <ShimmerItem height={33} width={90} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Shimmer>
    );
};

export default ListProductsLoading;
