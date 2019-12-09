import { combineReducers } from 'redux-immutable';
import userSelection from './userSelection';
import userData from './userData';
import userScore from './userScore';
import gameMemory from './gameMemory';
import postResponse from './postResponse';
import fetchedScores from './fetchedScores';
import requestStatus from './requestStatus';


const reducer = combineReducers({
    userSelection,
    userData,
    userScore,
    gameMemory,
    postResponse,
    requestStatus,
    fetchedScores
});

export default reducer;



