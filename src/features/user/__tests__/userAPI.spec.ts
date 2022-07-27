import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { IAuth, ILogin } from '../../../app/types';
import { API_LOGIN, BASE_API_URL } from '../../../common/constants';
import { makeStoreForTesting } from '../../../app/store';
import { login } from '../userAPI';
import { getTokenFromCookie } from '../../../common/utils';

const mockLoginData: ILogin = {
    name: 'some-name',
    password: 'some-password',
};

const mockAuthData: IAuth = {
    id: 'some-token',
    expiresIn: 100,
};

const server = setupServer(
    rest.post(BASE_API_URL + API_LOGIN, (req, res, ctx) =>
        // return mock data
        res(ctx.json(mockAuthData)),
    ),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('User Api', () => {
    it('should handle login properly', async () => {
        // pre-setup for the case
        const mockStore = makeStoreForTesting(); // create the mock store (so the state updates within this case won't affect other cases)
        await mockStore.dispatch(login(mockLoginData)); //  dispatch the method
        const state = mockStore.getState(); // get the state of the mock store

        // make the assertions
        expect(state.user.isAuthenticated).toBeTruthy();
        expect(state.user.isLoading).toBeFalsy();
        const tokenFromCookie = getTokenFromCookie();
        expect(tokenFromCookie).toBe(mockAuthData.id);
    });

    it('should handle error during login properly', async () => {
        server.use(
            rest.post(BASE_API_URL + API_LOGIN, (req, res, ctx) =>
                res(ctx.status(500), ctx.json('something goes wrong')),
            ),
        );

        // pre-setup for the case
        const mockStore = makeStoreForTesting();
        await mockStore.dispatch(login(mockLoginData));
        const state = mockStore.getState();

        expect(state.user.isAuthenticated).toBeFalsy();
        expect(state.user.isLoading).toBeFalsy();
        expect(state.user.error).toBe('something goes wrong');
    });
});
