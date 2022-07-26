export type IAuthState = {
    id: null | string;
    expiresIn: null | number;
};

export type IRoute = {
    Component: () => JSX.Element;
    path: string;
};

export type IRoutes = IRoute[];

export type IFormValues = {
    [key: string]: string;
};
