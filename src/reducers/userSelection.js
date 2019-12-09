import Immutable, { Map } from 'immutable';
import { GET_USER_CHOICE } from '../constants'

const initialState = Map({
    level: '3',
    cardsBack: '1'
});

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_USER_CHOICE:
            return state.merge(Immutable.fromJS(action.payload));

        default:
            return state;
    }

}