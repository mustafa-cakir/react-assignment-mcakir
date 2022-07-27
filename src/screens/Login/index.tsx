import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL_PRODUCTS_LIST } from '../../common/constants';
import { useAppSelector } from '../../common/hooks';
import LoginForm from '../../features/user/LoginForm';

const Login = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAppSelector(redux => redux.user);

    useEffect(() => {
        if (isAuthenticated) {
            // if user has already been logged in, then forward it to homepage
            navigate(URL_PRODUCTS_LIST);
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="row">
            <div className="col col-12 col-md-6 col-lg-4 mx-auto">
                <div className="ui-card my-50">
                    <h1 className="mt-2">Login</h1>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
