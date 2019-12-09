import Immutable, { List, Map } from 'immutable';

import {
    SCORES_LOAD_SUCCESS,
} from '../constants'

export default function fetchedScores(state = List(), action) {
    switch (action.type) {

        case SCORES_LOAD_SUCCESS:

            return Immutable.fromJS(
                action.payload.map(item =>
                    Map({ username: item.username, score: item.score }))
            )

        default:
            return state;
    }

}