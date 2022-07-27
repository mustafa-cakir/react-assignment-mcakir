import { getTokenFromCookie, isTest, removeTokenFromCookie, setTokenToCookie } from '../index';

describe('Utils methods', () => {
    it('should render alert component', () => {
        expect(isTest).toBeTruthy();
    });
    it('should set and get the cookie works properly', () => {
        // set the cookie first
        setTokenToCookie('some-token', 100);
        // expect the cookie to be set properly
        expect(getTokenFromCookie()).toBe('some-token');
        // remove the cookie
        removeTokenFromCookie();
        // now expect the cookie to be removed
        expect(getTokenFromCookie()).toBe('');
    });
});
