import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Page404 from '../screens/Page404';

const App = () => {
    return (
        <div className="app" data-testid="app">
            <BrowserRouter>
                <div className="app-content">
                    <Routes>
                        {routes.map(({ path, Component }) => {
                            return <Route key={path} path={path} element={<Component />} />;
                        })}
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
