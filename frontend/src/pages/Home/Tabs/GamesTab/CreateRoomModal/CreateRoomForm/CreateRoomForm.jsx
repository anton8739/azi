import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {roomSchema} from "utils/validationShema";
import {LoginFormContext, RoomFormContext} from "utils/context";
import {Form} from "antd";
import InputField from "components /common/Field/InputField/InputField";
import {LOGIN_FIELDS, ROOM_FIELDS} from "utils/constants";
import LockIcon from "components /common/Icon/LockIcon";
import ButtonPrimary from "components /common/Button/ButtonPrimary /ButtonPrimary";
import UnLockIcon from "components /common/Icon/UnLockIcon";
import CheckBoxField from "components /common/Field/CheckBoxField/CheckBoxField";
import CustomSelectPlayersLimit from "components /common/Field/CustomSelectPlayersLimit/CustomSelectPlayersLimit";
import {useRoomStore} from "stores";
const CreateRoomForm = ({handleOk}) => {
    const {createRoom} = useRoomStore();
    const {register, handleSubmit, control, setValue, getValues, watch, formState: {errors, isValid}, ...rest} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(roomSchema),
        defaultValues: {
            [ROOM_FIELDS.PLAYERS_LIMIT] : '2',
        }
    });
    const [loading, setLoading] = useState(false);
    const [withPassword, setWithPassword] = useState(false);
    const submitForm = (e) => {
        const submit = async values => {
            try {
                setLoading(true)
                await createRoom(values)
                handleOk()
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
    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name === ROOM_FIELDS.LOCKED) {
                setWithPassword(value[name])
                setValue(ROOM_FIELDS.PASSWORD,undefined)
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);
    return (
        <RoomFormContext.Provider
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

                <InputField name={ROOM_FIELDS.NAME}
                            type="text"
                            context={RoomFormContext}
                            placeholder="Введите название комнаты"
                />
                <InputField name={ROOM_FIELDS.BID}
                            type="text"
                            context={RoomFormContext}
                            placeholder="Введите сумму ставки"
                />
                <CheckBoxField
                    name={ROOM_FIELDS.LOCKED}
                    context={RoomFormContext}
                    label="Комната с паролем"
                />
                <InputField name={ROOM_FIELDS.PASSWORD}
                            type="password"
                            icon={<LockIcon fill="#E29A0C"/>}
                            context={RoomFormContext}
                            placeholder="Введите пароль"
                            withHide
                            hideIcon={<UnLockIcon fill="#E29A0C"/>}
                            disabled={!withPassword}
                />
                <CustomSelectPlayersLimit name={ROOM_FIELDS.PLAYERS_LIMIT} context={RoomFormContext} />
                <ButtonPrimary width='100%' onClick={submitForm} loading={loading} height='45px'>
                    Cоздать игру
                </ButtonPrimary>
            </Form>
        </RoomFormContext.Provider>
    );
}

export default CreateRoomForm;