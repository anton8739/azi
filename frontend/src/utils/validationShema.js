import * as yup from 'yup';
import {CHECK_ROOM_PASSWORD_FIELDS, LOGIN_FIELDS, REGISTRATION_FIELDS, ROOM_FIELDS} from "utils/constants";

export const loginSchema = yup.object().shape({
    [LOGIN_FIELDS.EMAIL]: yup.string().trim().email('Не коррректный формат email').required('Это обязательное поле'),
    [LOGIN_FIELDS.PASSWORD]: yup
        .string()
        .trim()
        .required('Это обязательное поле')
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'Пароль долже содежрать латинские буквы, как минимум одну большую букву и одну цифру и быть длинной более 8 символов'),
});
export const registrationSchema = yup.object().shape({
    [REGISTRATION_FIELDS.EMAIL]: yup.string().trim().email('Не коррректный формат email').required('Это обязательное поле'),
    [REGISTRATION_FIELDS.USERNAME]: yup.string().trim().required('Это обязательное поле'),
    [REGISTRATION_FIELDS.PASSWORD]: yup
        .string()
        .trim()
        .required('Это обязательное поле')
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'Пароль долже содежрать латинские буквы, как минимум одну большую букву и одну цифру и быть длинной более 8 символов'),
});

export const roomSchema = yup.object().shape({
    [ROOM_FIELDS.NAME]: yup.string().trim().required('Это обязательное поле'),
    [ROOM_FIELDS.BID]: yup.number().required('Это обязательное поле').max(1000, 'Максимальная ставка 1000').typeError('Значение должно быть числом'),
    [ROOM_FIELDS.LOCKED]: yup.boolean(),
    [ROOM_FIELDS.PLAYERS_LIMIT]: yup.number().required('Это обязательное поле').min(2, 'Минимум 2 игрока').max(6, 'Максимум 6 игроков').typeError('Значение должно быть числом'),
    [ROOM_FIELDS.PASSWORD]: yup.string().when([ROOM_FIELDS.LOCKED], (values,schema) => {
        if (values && values[0]) {
            return schema.required('Это обязательное поле').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'Пароль долже содежрать латинские буквы, как минимум одну большую букву и одну цифру и быть длинной более 8 символов');
        }

    }),
});
export const checkRoomPasswordSchema = yup.object().shape({
    [CHECK_ROOM_PASSWORD_FIELDS.PASSWORD]: yup
        .string()
        .trim()
        .required('Это обязательное поле')
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'Пароль долже содежрать латинские буквы, как минимум одну большую букву и одну цифру и быть длинной более 8 символов'),
});