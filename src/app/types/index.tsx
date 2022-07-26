export type IUserState = {
    user: null | string;
};

export type IRoute = {
    Component: () => JSX.Element;
    path: string;
};

export type IRoutes = IRoute[];
