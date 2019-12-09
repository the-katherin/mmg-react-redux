import {
    POST_SCORE,
    SCORES_LOAD_REQUEST,
    SCORES_LOAD_SUCCESS,
    SCORES_LOAD_ERROR,
} from '../constants';



export const getPostResponse = (resultMessage) => ({
    type: POST_SCORE,
    payload: resultMessage
});

export const postScore = (userName, email, score) => {
    return (dispatch) => {

        return fetch('http://mmg-score.herokuapp.com', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'cors_url',
            },
            method: 'POST',
            body: JSON.stringify({
                username: userName,
                email: email,
                score: score
            })
        })

            .then(response => response.json())
            .then(result => dispatch(getPostResponse(result.message)))
            .catch((error) => dispatch(fetchError(error)))
    }
};


export const scoresLoadRequest = {
    type: SCORES_LOAD_REQUEST,
    payload: 'isFetching'
}

export const receiveAllScores = (result) => ({
    type: SCORES_LOAD_SUCCESS,
    payload: result,
});

export const fetchError = (error) => ({
    type: SCORES_LOAD_ERROR,
    payload: 'error',
    errorMessage: error
});


export const fetchAllScores = () => {
    return (dispatch) => {

        dispatch(scoresLoadRequest);
        return fetch('http://mmg-score.herokuapp.com', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'cors_url',
            },
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => dispatch(receiveAllScores(json.result)))
            .catch((error) => dispatch(fetchError(error)))
    }
}