import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Page404 from '../screens/Page404';
import Header from '../common/components/Header';
import PrivateRoute from './routes/PrivateRoute';
import Footer from '../common/components/Footer';

const App = () => {
    return (
        <div className="app" data-testid="app">
            <BrowserRouter>
                <Header />
                <div className="app-content">
                    <div className="container">
                        <Routes>
                            {routes.map(({ path, Component, isAuthRequired }) => {
                                return (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={
                                            isAuthRequired ? (
                                                <PrivateRoute>
                                                    <Component />
                                                </PrivateRoute>
                                            ) : (
                                                <Component />
                                            )
                                        }
                                    />
                                );
                            })}
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
