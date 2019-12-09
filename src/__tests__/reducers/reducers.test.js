import * as types from '../../constants';

import userSelection from '../../reducers/userSelection';
import userData from '../../reducers/userData';
import userScore from '../../reducers/userScore';
import postResponse from '../../reducers/postResponse';
import requestStatus from '../../reducers/requestStatus';

import { Map } from 'immutable';

describe('postResponse reducer', () => {

    it('POST_SCORE', () => {
        const action = {

            type: types.POST_SCORE,
            payload: 'success',

        };

        expect(postResponse('', action)).toEqual(
            'success'

        )
    });

});

describe('requestStatus reducer', () => {

    it('SCORES_LOAD_REQUEST', () => {
        const action = {
            type: types.SCORES_LOAD_REQUEST,
            payload: 'isFetching'
        };

        expect(requestStatus('', action)).toEqual(
            'isFetching'

        )
    });

    it('SCORES_LOAD_SUCCESS', () => {
        const action = {
            type: types.SCORES_LOAD_SUCCESS,
            payload: 'success'
        };

        expect(requestStatus('', action)).toEqual(
            'success'

        )
    });

    it('SCORES_LOAD_ERROR', () => {
        const action = {
            type: types.SCORES_LOAD_ERROR,
            payload: 'error'
        };

        expect(requestStatus('', action)).toEqual(
            'error'

        )
    });


});


describe('userData reducer', () => {

    it('GET_USER_DATA', () => {

        const initialState = Map({
            name: 'anonim',
            lastName: 'anonim',
            email: 'anonim@anonim.net'
        });

        const action = {
            type: types.GET_USER_DATA,
            payload: {
                name: 'alla',
                lastName: 'alla',
                email: 'alla@.net'
            },
        };

        expect(userData(initialState, action)).toEqual(
            Map({
                name: 'alla',
                lastName: 'alla',
                email: 'alla@.net'
            })

        )
    });

});


describe('userScore reducer', () => {

    it('GET_USER_DATA', () => {

        const action = {
            type: types.GET_TIME,
            payload: 30
        };

        expect(userScore(0, action)).toEqual(
            30
        )
    });

});

describe('userSelection reducer', () => {

    it('GET_USER_CHOICE', () => {

        const initialState = Map({
            level: '3',
            cardsBack: '1'
        });

        const action = {
            type: types.GET_USER_CHOICE,
            payload: {
                level: '3',
                cardsBack: '3'
            },
        };

        expect(userSelection(initialState, action)).toEqual(
            Map({
                level: '3',
                cardsBack: '3'
            })
        )
    });

});






