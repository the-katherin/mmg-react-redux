import {
    GET_USER_CHOICE,
    GET_USER_DATA

} from '../constants';

export const getUserChoiceFromForm = (level, cardsBack) => ({
    type: GET_USER_CHOICE,
    payload: {
        level,
        cardsBack
    },
});

export const getUserDataFromForm = (name, lastName, email) => ({
    type: GET_USER_DATA,
    payload: {
        name,
        lastName,
        email
    },
});

