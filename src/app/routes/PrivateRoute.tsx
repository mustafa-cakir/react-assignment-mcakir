import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../common/hooks';
import { URL_LOGIN } from '../../common/constants';

type Prop = {
    children: JSX.Element;
};

const PrivateRoute = ({ children }: Prop): JSX.Element => {
    const { isAuthenticated } = useAppSelector(redux => redux.login);
    return isAuthenticated ? children : <Navigate to={URL_LOGIN} />;
};

export default PrivateRoute;
