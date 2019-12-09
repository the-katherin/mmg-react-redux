import React from 'react';
import { cardsBack } from '../../../../assets/img';

const CardsBackFieldset = () => (
    <fieldset className='cards-back-fieldset' name='cardsBack'>

        <legend>Choose cards' back</legend>

        <div className='cards-back-fieldset__radios'>

            <div>
                <input type="radio" name='cardsBack' id='cardsback1' value="1" required />
                <label htmlFor="cardsback1">
                    <img src={cardsBack[1]} alt="first cards' back" />
                </label>
            </div>

            <div>
                <input type="radio" name='cardsBack' id='cardsback2' value="2" />
                <label htmlFor="cardsback2">
                    <img src={cardsBack[2]} alt="sec cards' back" />
                </label>
            </div>

            <div>
                <input type="radio" name='cardsBack' id='cardsback3' value="3" />
                <label htmlFor="cardsback3">
                    <img src={cardsBack[3]} alt="third cards' back" />
                </label>
            </div>

        </div>

    </fieldset>
);

export default CardsBackFieldset;