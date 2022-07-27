import { IAuth, ILogin, IUserState } from '../../../app/types';
import userReducer, { logout, setLogin } from '../userSlice';
import { getTokenFromCookie } from '../../../common/utils';

describe('User Reducer', () => {
    const initialState: IUserState = {
        isAuthenticated: false,
        isLoading: false,
        error: null,
    };

    const mockAuthData: IAuth = {
        id: 'some-token',
        expiresIn: 100,
    };

    it('should handle initial state', () => {
        expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should setLogin set the user authenticate and set token to cookie', () => {
        const mock = userReducer(initialState, setLogin(mockAuthData));
        expect(mock.isAuthenticated).toBeTruthy();
        const tokenFromCookie = getTokenFromCookie();
        expect(tokenFromCookie).toBe(mockAuthData.id);
    });

    it('should handle logout action properly', () => {
        const mock = userReducer({ ...initialState, isAuthenticated: true }, logout());
        expect(mock.isAuthenticated).toBeFalsy();
    });
});
