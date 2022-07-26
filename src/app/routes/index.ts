import { URL_PRODUCTS_LIST, URL_LOGIN, URL_PRODUCTS_ADD, URL_PRODUCTS_UPDATE } from '../../common/constants';
import { IRoutes } from '../types';
import Login from '../../screens/Login';
import ListProducts from '../../screens/Products/ListProducts';
import AddProduct from '../../screens/Products/AddProduct';
import UpdateProduct from '../../screens/Products/UpdateProduct';

const routes: IRoutes = [
    {
        path: URL_PRODUCTS_LIST,
        Component: ListProducts,
        isAuthRequired: true,
    },
    {
        path: URL_LOGIN,
        Component: Login,
        isAuthRequired: false,
    },
    {
        path: URL_PRODUCTS_ADD,
        Component: AddProduct,
        isAuthRequired: true,
    },
    {
        path: URL_PRODUCTS_UPDATE,
        Component: UpdateProduct,
        isAuthRequired: true,
    },
    /**
     * Other routes will go here...
     */
];

export default routes;
