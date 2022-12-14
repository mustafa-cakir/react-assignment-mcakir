import React, { useEffect } from 'react';
import './Style.scss';

const Page404 = () => {
    useEffect(() => {
        document.title = '404 - Page Not Found';
    }, []);

    return (
        <div className="page-404" data-testid="page-404">
            <div className="container">
                <div className="page-404-inner">
                    <div>
                        <code>404 - Page not found.</code>
                        <div>That's all we know</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page404;
