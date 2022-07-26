import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { makeStoreForTesting } from '../store';

const customRender = (
    ui: ReactElement,
    { preloadedState = {}, store = makeStoreForTesting(preloadedState), ...renderOptions } = {},
) => {
    const AllTheProviders = ({ children }: { children: JSX.Element }) => {
        return (
            <Provider store={store}>
                <BrowserRouter>{children}</BrowserRouter>
            </Provider>
        );
    };

    return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

export * from '@testing-library/react';
export { customRender as render };
