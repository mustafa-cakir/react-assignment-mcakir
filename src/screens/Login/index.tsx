import React from 'react';
import Input from '../../common/components/Input';
import useForm from '../../common/hooks/useForm';
import { IFormValues } from '../../app/types';
import Button from '../../common/components/Button';

const Login = () => {
    const onSubmitHandler = (formValues: IFormValues) => {
        console.log(formValues);
    };

    const { values, setValues, onSubmit } = useForm(onSubmitHandler);

    return (
        <>
            <div>login page will go here</div>
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
                <div className="my-3">
                    <Button title="Submit" isLoading>
                        Submit
                    </Button>
                </div>
            </form>
        </>
    );
};

export default Login;
