export type IAuth = {
    id: string;
    expiresIn: number;
};

export type IUserState = {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: null | string;
};

export type ILogin = {
    name: string;
    password: string;
};

export type IRoute = {
    Component: () => JSX.Element;
    path: string;
    isAuthRequired: boolean;
};

export type IRoutes = IRoute[];

export type IFormValues = {
    [key: string]: string;
};

export type IProduct = IProductAdd & {
    id: number;
};

export type IProductAdd = {
    title: string;
    material: string;
    enabled: boolean;
};

export type ILayout = 'grid' | 'list';

export type IProductsState = {
    products: IProduct[];
    isLoading: boolean;
    error: null | string;
    layout: ILayout;
    add: {
        isLoading: boolean;
        error: null | string;
        isSuccess: boolean;
    };
    update: {
        product: null | IProduct;
        error: null | string;
        isSuccess: boolean;
        isLoading: boolean;
    };
    delete: {
        loadingProductId: null | number;
    };
};
