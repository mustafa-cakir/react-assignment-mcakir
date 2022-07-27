import { COOKIE_NAME } from '../constants';

export const isTest = process.env.NODE_ENV === 'test';

/**
 * This method helps simulate the fetch request by sleeping 0.5s - 1.5s (randomly) seconds.
 */
export const simulateFetchWithDelay = () =>
    new Promise(r => {
        setTimeout(r, (Math.random() + 0.5) * 1000);
    });
/**
 *
 * @param value
 * @param maxAge
 * set the auth token to cookie
 */
export const setTokenToCookie = (value: string, maxAge: number) => {
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; max-age=${maxAge}`;
};

/**
 * get the auth token from cookie
 */
export const getTokenFromCookie = () => document.cookie.match(`(^|;)\\s*${COOKIE_NAME}\\s*=\\s*([^;]+)`)?.pop() || '';

export const removeTokenFromCookie = () => {
    setTokenToCookie('', 0);
};
