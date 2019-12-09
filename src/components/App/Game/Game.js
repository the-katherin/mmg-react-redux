import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import CardsContainer from './CardsContainer'
import Timer from './Timer';
import { getUserSelection, getIsFinished } from "../../../selectors";
import { generateCards } from '../../../actions/generateCards';

export class Game extends Component {


    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        this.props.generateCards(this.props.userSelection.level);


    }



    componentDidUpdate() {
        if (this.props.isFinished) {

            this.setState({ redirect: true });
        }
    }



    render() {

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/results' />;
        }


        return (
            <div className="game-window">
                <Timer />
                <CardsContainer />
                <div className="game-window__buttons">
                    <Link to='/results'><button>Results</button></Link>
                    <Link to='/form'><button>Change selection</button></Link>
                </div>

            </div>
        )
    }
};

Game.propTypes = {
    userSelection: PropTypes.shape({
        level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        cardsBack: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,

    generateCards: PropTypes.func.isRequired

};

export default connect(
    state => ({
        userSelection: getUserSelection(state),
        isFinished: getIsFinished(state),
    }),

    {

        generateCards
    }

)(Game);

