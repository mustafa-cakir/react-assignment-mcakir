import React, { useState } from 'react';
import Input from '../../common/components/Input';
import Button from '../../common/components/Button';
import { ILogin } from '../../app/types';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import Alert from '../../common/components/Alert';
import { login } from './userAPI';

const LoginForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();
    const { error, isLoading } = useAppSelector(redux => redux.user);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(login({ name, password } as ILogin));
    };

    return (
        <>
            {error && <Alert type="error" message={error} />}
            <form onSubmit={onSubmitHandler} data-testid="login-form">
                <div className="my-3">
                    <Input name="name" onChange={event => setName(event.target.value)} label="Username" value={name} />
                </div>
                <div className="my-3">
                    <Input
                        name="password"
                        type="password"
                        onChange={event => setPassword(event.target.value)}
                        label="Password"
                        value={password}
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
