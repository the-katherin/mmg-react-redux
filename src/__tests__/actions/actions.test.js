import * as actions from '../../actions';
import * as types from '../../constants';


const mockRandomWith = require('jest-mock-random');

describe('cardClick actions', () => {
    test('checkMatch action', () => {
        expect(actions.checkMatch).toEqual({
            type: types.CHECK_MATCH,
        });
    });

    test('cardsFlip action', () => {
        expect(actions.cardFlip(3, 5)).toEqual({
            type: types.CARD_FLIP,
            payload: {
                id: 3,
                number: 5,
            }

        });
    });

    test('cardsUnflip action', () => {
        expect(actions.cardsUnflip).toEqual({
            type: types.CARDS_UNFLIP,
        });
    });

    test('isFinished action', () => {
        expect(actions.isFinished).toEqual({
            type: types.IS_FINISHED_CHECK,
        });
    });
});


describe('clearGameMemory action', () => {
    test('clearGameMemory action returns appropriate object', () => {
        expect(actions.clearGameMemory()).toEqual({
            type: types.CLEAR_MEMORY,
        });
    });
});

describe('generateCards action', () => {
    mockRandomWith.mockRandom(0);
    test('generateCards with Math.random (random index for shuffling cards)equals to 0',
        () => {

            expect(actions.generateCards(3)).toEqual({
                type: types.GENERATE_CARDS,
                payload: [
                    { id: 2, number: 1 },
                    { id: 3, number: 2 },
                    { id: 4, number: 2 },
                    { id: 5, number: 3 },
                    { id: 6, number: 3 },
                    { id: 1, number: 1 }
                ]
            });
        });

    test('generate array of cards object', () => {

        expect(actions.generateCardsArray(3)).toEqual(
            [
                { id: 1, number: 1 },
                { id: 2, number: 1 },
                { id: 3, number: 2 },
                { id: 4, number: 2 },
                { id: 5, number: 3 },
                { id: 6, number: 3 },

            ]
        );
    });

    test('should shuffle array', () => {

        const arr = [
            { id: 1, number: 1 },
            { id: 2, number: 1 },
            { id: 3, number: 2 },
            { id: 4, number: 2 },
            { id: 5, number: 3 },
            { id: 6, number: 3 },

        ];

        expect(actions.shuffle(arr)).toEqual(
            [
                { id: 2, number: 1 },
                { id: 3, number: 2 },
                { id: 4, number: 2 },
                { id: 5, number: 3 },
                { id: 6, number: 3 },
                { id: 1, number: 1 }
            ]
        );
    });


});



describe('getDataFromForm actions', () => {
    test('getUserChoiceFromForm action', () => {
        expect(actions.getUserChoiceFromForm('3', '1'))
            .toEqual({
                type: types.GET_USER_CHOICE,
                payload: {
                    level: '3',
                    cardsBack: '1',
                },
            });
    });

    test('getUserDataFromForm action', () => {
        expect(actions.getUserDataFromForm('alex', 'fauler', 'alex@.net'))
            .toEqual({
                type: types.GET_USER_DATA,
                payload: {
                    name: 'alex',
                    lastName: 'fauler',
                    email: 'alex@.net',
                }

            });
    });

});



describe('getTime action', () => {
    test('getTime action', () => {
        expect(actions.getTime(145)).toEqual({
            type: types.GET_TIME,
            payload: 145,
        });
    });
});

import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates SCORES_LOAD_SUCCESS when fetching scores has been done', () => {
        fetchMock.getOnce('http://mmg-score.herokuapp.com',
            {
                headers: { 'content-type': 'application/json' },
                body: {

                    result: [1, 2, 3],

                }
            },
        );

        const expectedActions = [
            actions.scoresLoadRequest,
            actions.receiveAllScores([1, 2, 3])
        ];

        const store = mockStore({ result: [] });

        return store.dispatch(actions.fetchAllScores()).then(() => {

            expect(store.getActions()).toEqual(expectedActions)
        })
    });
});



describe('score action', () => {

    test('getPostResponse action', () => {
        expect(actions.getPostResponse('success')).toEqual({
            type: types.POST_SCORE,
            payload: 'success',
        });
    });

    test('scoresLoadRequest action', () => {
        expect(actions.scoresLoadRequest).toEqual({
            type: types.SCORES_LOAD_REQUEST,
            payload: 'isFetching',
        });
    });

    test('receiveAllScores action', () => {
        expect(actions.receiveAllScores([1, 2, 3])).toEqual({
            type: types.SCORES_LOAD_SUCCESS,
            payload: [1, 2, 3],
        });
    });

    test('fetchError action', () => {
        expect(actions.fetchError('error message')).toEqual({
            type: types.SCORES_LOAD_ERROR,
            payload: 'error',
            errorMessage: 'error message'
        });
    });


});







