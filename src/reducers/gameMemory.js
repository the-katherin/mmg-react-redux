import Immutable, { List, Map } from 'immutable';

import {
    GENERATE_CARDS,
    GET_USER_CHOICE,
    CHECK_MATCH,
    CARD_FLIP,
    CARDS_UNFLIP,
    IS_FINISHED_CHECK,
    CLEAR_MEMORY

} from '../constants';

const initialState = Map({
    level: "3",
    numberOfMatches: null,
    isFinished: false,
    guess1: null,
    guess2: null,
    cards: [],
    isMatched: false
});


export default function gameMemory(state = initialState, action) {

    let guess1 = state.get('guess1');
    let guess2 = state.get('guess2');
    let cards = state.get('cards');
    let isMatched = state.get('isMatched');
    let numberOfMatches = state.get('numberOfMatches');
    let level = parseInt(state.get('level'), 10);


    switch (action.type) {


        case CLEAR_MEMORY: {
            return initialState;
        }

        case GET_USER_CHOICE: {
            return state.set('level', action.payload.level);
        }

        case CHECK_MATCH: {

            if (guess1 && guess2) {

                if (guess1.get('number') === guess2.get('number')) {



                    return state.merge(Map(
                        {
                            numberOfMatches: numberOfMatches + 1,
                            isMatched: true,

                        }));

                }

                return state.merge(Map(
                    {
                        isMatched: false,

                    }));
            }

            return state;
        };


        case CARD_FLIP: {

            let cardId = parseInt(action.payload.id, 10);
            let cardNumber = parseInt(action.payload.number, 10);

            if (guess1 && guess1.get('id') === cardId) {

                return state;
            }

            if (!guess1 || !guess2) {

                let updatedCards = flipCard(List([cardId]), cards, 'card--selected');

                if (!guess1) {
                    return state.merge(Map(
                        {
                            guess1:
                                Map({ 'id': cardId, 'number': cardNumber }),
                            cards: updatedCards,

                        }));

                }
                return state.merge(Map(
                    {
                        guess2:
                            Map({ 'id': cardId, 'number': cardNumber }),
                        cards: updatedCards,

                    }));

            }


            return state;

        };

        case CARDS_UNFLIP: {

            if (guess1 && guess2) {

                let guess1Id = guess1.get('id');

                let guess2Id = guess2.get('id');

                let updatedCards;

                if (isMatched) {
                    updatedCards =
                        flipCard(List([guess1Id, guess2Id]), cards, 'card--match');
                }

                else {
                    updatedCards =
                        flipCard(List([guess1Id, guess2Id]), cards, 'card--not-selected');

                }

                return state.merge(Map(
                    {
                        guess1: null,
                        guess2: null,
                        cards: updatedCards
                    }));


            }
            return state;
        };

        case IS_FINISHED_CHECK: {
            if (level === numberOfMatches) {
                return state.merge(Map(
                    {
                        isFinished: true,
                    }));
            };
            return state;
        };


        case GENERATE_CARDS: {
            return state.set('cards', Immutable.fromJS(action.payload));
        };

        default: {
            return state;
        };
    }

};

const flipCard = (cardIds, cardsArray, cardClass) => {

    let indexes = [];

    let updatedCards = cardsArray;

    cardIds.forEach(id => {

        let index = cardsArray.findKey(item => parseInt(item.get('id'), 10) === id);
        indexes.push(index);

        let flippedCard = cardsArray.get(index).set('flipped', cardClass);

        updatedCards = updatedCards.set(index, flippedCard);

    });

    return updatedCards;
};