
import { getUserChoiceFromForm, getUserDataFromForm } from './getDataFromForm';
import {
    fetchAllScores, postScore, getPostResponse,
    scoresLoadRequest, receiveAllScores, fetchError
} from './scores';
import { generateCards, generateCardsArray, shuffle } from './generateCards';
import { checkMatch, cardFlip, cardsUnflip, isFinished } from './cardClick';
import { clearGameMemory } from './clearGameMemory';
import { getTime } from './getTime';

export {
    getUserChoiceFromForm,
    getUserDataFromForm,

    generateCards,
    generateCardsArray,
    shuffle,

    checkMatch,
    cardFlip,
    cardsUnflip,
    isFinished,

    getTime,

    getPostResponse,
    scoresLoadRequest,
    receiveAllScores,
    fetchError,


    fetchAllScores,
    postScore,
    clearGameMemory
};









