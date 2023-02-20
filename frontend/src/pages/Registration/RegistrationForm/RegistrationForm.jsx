import React, {useState} from 'react';
import InputField from "components /common/Field/InputField/InputField";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import {useForm} from 'react-hook-form';
import {RegistrationFormContext} from "utils/context";
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema, registrationSchema} from "utils/validationShema";
import './RegistrationForm.scss'
import {Form} from "antd";
import {LOGIN_FIELDS, REGISTRATION_FIELDS} from "utils/constants";
import EmailIcon from "components /common/Icon/EmailIcon";
import LockIcon from "components /common/Icon/LockIcon";
import UserIcon from "components /common/Icon/UserIcon";
import {observer} from "mobx-react-lite";
import {useAuthStore} from "stores";
import {useHistory} from "react-router-dom";
import {RouteNames} from "utils/routes";
import UnLockIcon from "components /common/Icon/UnLockIcon";

const RegistrationForm = (props) => {
    const {registr} = useAuthStore();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, control, setValue, getValues, formState: {errors, isValid}, ...rest} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(registrationSchema),
    });
    const submitForm = (e) => {
        const submit = async values => {
            try {
                setLoading(true);
                await registr(values)
                setLoading(false);
                history.push(RouteNames.LOGIN)
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
        <RegistrationFormContext.Provider
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
            <Form noValidate className="registration-form">
                <InputField name={REGISTRATION_FIELDS.USERNAME}
                            type="text"
                            icon={<UserIcon fill="#E29A0C"/>}
                            context={RegistrationFormContext}
                            placeholder="Введите имя пользователя"
                />
                <InputField name={REGISTRATION_FIELDS.EMAIL}
                            type="email"
                            icon={<EmailIcon fill="#E29A0C"/>}
                            context={RegistrationFormContext}
                            placeholder="Введите email"
                />
                <InputField name={REGISTRATION_FIELDS.PASSWORD}
                            type="password"
                            icon={<LockIcon fill="#E29A0C"/>}
                            context={RegistrationFormContext}
                            placeholder="Введите пароль"
                            withHide
                            hideIcon={<UnLockIcon fill="#E29A0C"/>}
                />
                <ButtonPrimary width='100%' onClick={submitForm} loading={loading} height='45px'>
                    РЕГИСТРАЦИЯ
                </ButtonPrimary>
            </Form>
        </RegistrationFormContext.Provider>
    );
}

export default observer(RegistrationForm);