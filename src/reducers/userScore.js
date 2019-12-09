import { GET_TIME } from '../constants'

export default function getUserScore(state = 0, action) {

    switch (action.type) {
        case GET_TIME:
            return action.payload;

        default:
            return state;
    }

}