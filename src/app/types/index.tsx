export type IAuth = {
    id: string;
    expiresIn: number;
};

export type ILoginState = {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: null | string;
};

export type ILogin = {
    username: string;
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

export type IProduct = {
    id: number;
    title: string;
    material: string;
    enabled: boolean;
};

export type IProductsState = {
    products: IProduct[];
    isLoading: boolean;
    error: null | string;
};
