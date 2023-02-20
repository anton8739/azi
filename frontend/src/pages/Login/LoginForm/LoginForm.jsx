import React, {useState} from 'react';
import InputField from "components /common/Field/InputField/InputField";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import {useForm} from 'react-hook-form';
import {LoginFormContext} from "utils/context";
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from "utils/validationShema";
import './LoginForm.scss'
import {Form} from "antd";
import {LOGIN_FIELDS} from "utils/constants";
import EmailIcon from "components /common/Icon/EmailIcon";
import LockIcon from "components /common/Icon/LockIcon";
import {observer} from "mobx-react-lite";
import {useAuthStore} from "stores";
import UnLockIcon from "components /common/Icon/UnLockIcon";

const LoginForm = (props) => {
    const {login} = useAuthStore();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, control, setValue, getValues, formState: {errors, isValid}, ...rest} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(loginSchema),
    });
    const submitForm = (e) => {
        const submit = async values => {
            try {
                setLoading(true)
                await login(values)
                setLoading(false)
                console.log(values)
            } catch (e) {
                console.log(e)
            }
        };
        handleSubmit(submit, submitHandlerErrors)(e);
    };
    const submitHandlerErrors = async (errors, e) => {
        console.log(errors)
    };
    return (
        <LoginFormContext.Provider
            value={{
                register,
                handleSubmit,
                control,
                errors,
                setValue,
                getValues,
                ...rest,
            }}
        >
            <Form noValidate className="login-form">

                <InputField name={LOGIN_FIELDS.EMAIL}
                            type="email"
                            icon={<EmailIcon fill="#E29A0C"/>}
                            context={LoginFormContext}
                            placeholder="Введите email"
                />
                <InputField name={LOGIN_FIELDS.PASSWORD}
                            type="password"
                            icon={<LockIcon fill="#E29A0C"/>}
                            context={LoginFormContext}
                            placeholder="Введите пароль"
                            withHide
                            hideIcon={<UnLockIcon fill="#E29A0C"/>}
                />
                <ButtonPrimary width='100%' onClick={submitForm} loading={loading} height='45px'>
                    ВОЙТИ
                </ButtonPrimary>
            </Form>
        </LoginFormContext.Provider>
    );
}

export default observer(LoginForm);