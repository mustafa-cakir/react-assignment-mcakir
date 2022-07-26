import React from 'react';
import Input from '../../common/components/Input';
import Button from '../../common/components/Button';
import { IFormValues, ILogin } from '../../app/types';
import useCustomForm from '../../common/hooks/useCustomForm';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import Alert from '../../common/components/Alert';
import { login } from './loginAPI';

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const { isAuthenticated, error, isLoading } = useAppSelector(redux => redux.login);

    const onSubmitHandler = (formValues: IFormValues) => {
        dispatch(login(formValues as ILogin));
    };

    const { values, setValues, onSubmit } = useCustomForm(onSubmitHandler);

    return (
        <>
            {error && <Alert type="error" message={error} />}
            <form onSubmit={onSubmit}>
                <div className="my-3">
                    <Input name="name" onChange={setValues} label="Username" value={values.name} />
                </div>
                <div className="my-3">
                    <Input
                        type="password"
                        name="password"
                        onChange={setValues}
                        label="Password"
                        value={values.password}
                    />
                </div>
                <div className="mt-4">
                    <Button type="submit" title="Login" isFullWidth disabled={isLoading} isLoading={isLoading}>
                        Login
                    </Button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
