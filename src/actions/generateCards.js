import { GENERATE_CARDS } from '../constants';

export const generateCards = (level) => {

    let cards = generateCardsArray(level);
    let shuffledCards = shuffle(cards);

    return (
        {
            type: GENERATE_CARDS,
            payload: shuffledCards
        }
    );
};


export const generateCardsArray = (numberOfImages) => {

    let cards = [];
    numberOfImages = parseInt(numberOfImages, 10);

    for (let i = 1; i <= numberOfImages * 2; i += 2) {

        cards.push({
            id: i,
            number: (i + 1) / 2,

        });
        cards.push({
            id: i + 1,
            number: (i + 1) / 2,

        });
    }

    return cards;
}

export const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}
