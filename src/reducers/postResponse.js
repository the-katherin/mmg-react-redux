import {
    POST_SCORE
} from '../constants'


export default function getPostResponse(state = '', action) {
    switch (action.type) {

        case POST_SCORE:
            return action.payload;

        default:
            return state;
    }

}