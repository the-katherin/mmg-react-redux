import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { connect } from 'react-redux';
import { getUserSelection, getCardsArray, getIsFinished } from "../../../../selectors";
import { checkMatch, cardFlip, cardsUnflip, isFinished } from '../../../../actions';
import { CARD_FLIP_TIME } from '../../../../constants';
import pause from '../../../../utils/pause';


export class CardsContainer extends Component {

    constructor(props) {
        super(props);

        this.clickCount = 0;
        this.clickCountMax = 1;

        this.cardClickHandler = this.cardClickHandler.bind(this);

        //need to require  images for webpack before mounting
        this.importedImages = this.importImages(this.props.cards);

    }


    importImages(array) {

        const importedImages = {};

        // for each card save its src according to webpack path
        //es6 strings doesn't work here

        array.forEach(item => {
            importedImages[item.number] = require('../../../../assets/img/cards-front-img/' + item.number + '.png');
        });

        return importedImages;
    }

    async cardClickHandler(event) {

        this.clickCount += 1;

        if (this.clickCount > this.clickCountMax) {
            return;
        }

        let card = event.currentTarget;

        let clickedCardNumber = card.getAttribute("cardnumber");
        let clickedCardId = card.getAttribute("id");

        this.props.dispatch(cardFlip(clickedCardId, clickedCardNumber));

        await pause(CARD_FLIP_TIME);

        this.props.dispatch(checkMatch);
        this.props.dispatch(cardsUnflip);
        this.props.dispatch(isFinished);

        this.clickCount = 0;

    }

    render() {


        const cards = this.props.cards;

        return (
            <div className='cards-container'>

                {
                    cards.map(
                        (card) =>
                            <Card
                                key={card.id}
                                id={card.id}
                                cardNumber={card.number}
                                handleClick={this.cardClickHandler}
                                cardsBack={this.props.userSelection.cardsBack}
                                src={this.importedImages[card.number]}
                                flipped={card.flipped}
                                size={this.props.userSelection.level}
                            />)
                }


            </div >
        )
    }
}

CardsContainer.propTypes = {
    userSelection: PropTypes.shape({
        level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        cardsBack: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
    cards: PropTypes.array,
    isFinished: PropTypes.bool,

};

export default connect(
    state => ({
        cards: getCardsArray(state),
        userSelection: getUserSelection(state),
        isFinished: getIsFinished(state),
    }),

)(CardsContainer);