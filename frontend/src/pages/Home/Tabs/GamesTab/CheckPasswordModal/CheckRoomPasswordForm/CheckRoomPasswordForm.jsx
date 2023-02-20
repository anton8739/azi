import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {checkRoomPasswordSchema} from "utils/validationShema";
import {CheckRoomFormContext, RoomFormContext} from "utils/context";
import {Form} from "antd";
import InputField from "components /common/Field/InputField/InputField";
import {ROOM_FIELDS} from "utils/constants";
import LockIcon from "components /common/Icon/LockIcon";
import UnLockIcon from "components /common/Icon/UnLockIcon";
import CustomSelectPlayersLimit from "components /common/Field/CustomSelectPlayersLimit/CustomSelectPlayersLimit";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import {useRoomStore} from "stores";
const CheckRoomPasswordForm = ({handleOk, room}) => {
    const {checkRoomPassword} = useRoomStore();
    const {register, handleSubmit, control, setValue, getValues, watch, formState: {errors, isValid}, ...rest} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(checkRoomPasswordSchema),
    });
    const [loading, setLoading] = useState(false);
    const submitForm = (e) => {
        const submit = async values => {
            const data = {
                password: values.password,
                room : room.id
            }
            try {
                setLoading(true)
                const auth = await checkRoomPassword(data);
                if (auth) {
                    handleOk()
                }
                setLoading(false)
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
        <CheckRoomFormContext.Provider
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
            <Form noValidate className="check-room-password-form">
                <InputField name={ROOM_FIELDS.PASSWORD}
                            type="password"
                            icon={<LockIcon fill="#E29A0C"/>}
                            context={CheckRoomFormContext}
                            placeholder="Введите пароль"
                            withHide
                            hideIcon={<UnLockIcon fill="#E29A0C"/>}
                />
                <ButtonPrimary width='100%' onClick={submitForm} loading={loading} height='45px'>
                    Отправить
                </ButtonPrimary>
            </Form>
        </CheckRoomFormContext.Provider>
    );
}

export default CheckRoomPasswordForm;