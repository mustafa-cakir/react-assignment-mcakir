import {
    URL_HOMEPAGE,
    URL_LOGIN,
    URL_PRODUCTS_ADD,
    URL_PRODUCTS_LIST,
    URL_PRODUCTS_UPDATE,
} from '../../common/constants';
import { IRoutes } from '../types';
import Homepage from '../../screens/Homepage';
import Login from '../../screens/Login';
import ListProducts from '../../screens/Products/ListProducts';
import AddProduct from '../../screens/Products/AddProduct';
import UpdateProduct from '../../screens/Products/UpdateProduct';

const routes: IRoutes = [
    {
        path: URL_HOMEPAGE,
        Component: Homepage,
    },
    {
        path: URL_LOGIN,
        Component: Login,
    },
    {
        path: URL_PRODUCTS_LIST,
        Component: ListProducts,
    },
    {
        path: URL_PRODUCTS_ADD,
        Component: AddProduct,
    },
    {
        path: URL_PRODUCTS_UPDATE,
        Component: UpdateProduct,
    },
    /**
     * Other routes will go here...
     */
];

export default routes;
