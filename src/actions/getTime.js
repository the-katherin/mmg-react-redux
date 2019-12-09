import {
    GET_TIME,
} from '../constants';

export const getTime = (time) => ({
    type: GET_TIME,
    payload: time,
});