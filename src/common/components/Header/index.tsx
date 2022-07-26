import React from 'react';
import { Link } from 'react-router-dom';
import { URL_PRODUCTS_LIST } from '../../constants';
import './Style.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Button from '../Button';
import Icons from '../Icons';
import { logout } from '../../../features/login/loginSlice';

const Header = () => {
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector(redux => redux.login);

    const logoutClickHandler = () => {
        dispatch(logout());
    };

    return (
        <header className="header" data-testid="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to={URL_PRODUCTS_LIST} className="header-logo">
                            Logo
                        </Link>
                    </div>
                    <div className="col col-auto">
                        {isAuthenticated && (
                            <Button title="Logout" onClick={logoutClickHandler} layout="secondary">
                                <span className="mr-1">Logout </span>
                                <Icons name="log-out" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
