import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cardsBack } from '../../../../../assets/img';

export class Card extends Component {

    render() {

        const size = `card--size${this.props.size}`;

        return (
            <div className={`card ${this.props.flipped} ${size} `} onClick={this.props.handleClick} cardnumber={this.props.cardNumber} id={this.props.id}>
                <img className={`card__back ${size}`} src={cardsBack[this.props.cardsBack]} alt="card back" />
                <img className={`card__front ${size}`} src={this.props.src} alt="card front" />
            </div>
        );
    }
};

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    cardNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Card;