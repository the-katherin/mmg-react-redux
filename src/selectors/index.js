import { createSelector } from 'reselect';

const selectFetchedScores = state => state.get("fetchedScores");

function getTopResults(scores) {
    let topResults = scores
        .filter(item => item.get("score") > 1)
        .sortBy(item => item.get("score"))
        .take(10);

    return {
        topResults: topResults.toJS()
    };
};

export const selectTopResults = createSelector(
    selectFetchedScores,
    (fetchedScores) => getTopResults(fetchedScores)

);


export const getCardsArray = state => state.get('gameMemory').get('cards').toJS();

export const getUserData = state => state.get('userData').toJS();
export const getUserSelection = state => state.get('userSelection').toJS();

export const getIsFinished = state => state.get('gameMemory').get('isFinished');

export const getUserScore = state => state.get('userScore');

export const getRequestStatus = state => state.get('requestStatus');







