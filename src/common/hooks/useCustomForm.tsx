import React, { useState } from 'react';
import { IFormValues } from '../../app/types';

type IOnSubmitCallback = (arg0: IFormValues) => void;

type IUseFormReturn = {
    values: IFormValues;
    setValues: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const useCustomForm = (onSubmitCallback: IOnSubmitCallback, defaultFormValues: IFormValues = {}): IUseFormReturn => {
    const [localValues, setLocalValues] = useState<IFormValues>(defaultFormValues);

    const setValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValues({ ...localValues, [event.target.name]: event.target.value });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmitCallback?.(localValues);
    };

    return { values: localValues, setValues, onSubmit };
};

export default useCustomForm;
