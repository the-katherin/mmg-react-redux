import {
    CHECK_MATCH,
    CARD_FLIP,
    CARDS_UNFLIP,
    IS_FINISHED_CHECK,
} from '../constants';


export const checkMatch = ({
    type: CHECK_MATCH,
});

export const cardFlip = (id, number) => ({
    type: CARD_FLIP,
    payload:
    {
        id,
        number
    }

});

export const cardsUnflip = ({
    type: CARDS_UNFLIP,

});

export const isFinished = ({
    type: IS_FINISHED_CHECK,
});

