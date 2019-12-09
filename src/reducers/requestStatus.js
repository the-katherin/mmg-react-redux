import {
    SCORES_LOAD_REQUEST,
    SCORES_LOAD_SUCCESS,
    SCORES_LOAD_ERROR,
} from '../constants'


export default function requestStatus(state = '', action) {
    switch (action.type) {

        case SCORES_LOAD_REQUEST:
            return 'isFetching';

        case SCORES_LOAD_SUCCESS:
            return 'success';

        case SCORES_LOAD_ERROR:
            return 'error';

        default:
            return state;
    }

}