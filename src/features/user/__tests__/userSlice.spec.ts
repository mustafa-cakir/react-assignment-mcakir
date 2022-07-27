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

    const mockLoginData: ILogin = {
        name: 'some-name',
        password: 'some-password',
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
    // it('should handle the login async action properly', async () => {
    //     // create the mock store (so the state updates within this case won't affect other cases)
    //     const mockStore = makeStoreForTesting();
    //     //  dispatch the method to fetch and await for it
    //     await mockStore.dispatch(login(mockLoginData));
    //
    //     // add the question to edit.
    //     await mockStore.dispatch(editQuestion(mockInitialQuestionsData[0]));
    //     expect(mockStore.getState().questions.editingQuestionObj?.id).toBe(mockInitialQuestionsData[0].id);
    //
    //     // cancel the editing
    //     await mockStore.dispatch(cancelEditingQuestion());
    //     expect(mockStore.getState().questions.editingQuestionObj).toBeNull();
    // });
    //
    // it('should handle the remove all questions action properly', () => {
    //     const actual = questionsReducer(initialState, removeAllQuestions());
    //     expect(actual?.data.length).toBe(0);
    // });
    //
    // it('should handle the sort questions action properly', () => {
    //     const actual = questionsReducer(initialState, sortQuestions());
    //     expect(actual?.data[0].question).toBe(mockInitialQuestionsData[mockInitialQuestionsData.length - 1].question);
    // });
});
