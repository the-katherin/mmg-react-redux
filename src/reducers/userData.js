import Immutable, { Map } from 'immutable';
import { GET_USER_DATA } from '../constants'

export const initialState = Map({
    name: 'anonim',
    lastName: 'anonim',
    email: 'anonim@anonim.net'
});

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_USER_DATA:
            return state.merge(Immutable.fromJS(action.payload));

        default:
            return state;
    }

}