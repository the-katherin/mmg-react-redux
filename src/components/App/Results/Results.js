import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    getUserData,
    getRequestStatus,
    getUserScore,
    getIsFinished
} from "../../../selectors";
import ResultsList from './ResultsList';
import { fetchAllScores, postScore, clearGameMemory } from '../../../actions'

export class Results extends Component {


    async componentDidMount() {
        if (this.props.isFinished) {
            await this.props.postScore(
                this.props.userData.name + this.props.userData.lastName,
                this.props.userData.email,
                this.props.userScore
            );

        };

        this.props.fetchAllScores();

        this.props.clearGameMemory();

    }

    render() {

        const requestStatus = this.props.requestStatus;

        let response;

        switch (requestStatus) {
            case 'isFetching':
                response = <div> Loading... </div>;
                break;
            case 'success':
                response = <ResultsList />;
                break;
            case 'error':
                response = <div> Sorry, an error on server occured </div>;
                break;
            default:
                response = '';
        }


        return (
            <div className="results-window">

                {this.props.userScore > 0 && <h2> You did it! Welldone! Your score is {this.props.userScore}</h2>}

                <h3>TOP-10 results </h3>
                {response}

                <Link to={"/game"} ><button>Restart</button></Link>
            </div>
        )
    }
};

Results.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string
    }).isRequired,
    userScore: PropTypes.number,
    requestStatus: PropTypes.string.isRequired,
    postScore: PropTypes.func.isRequired,
    fetchAllScores: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        userData: getUserData(state),
        userScore: getUserScore(state),
        requestStatus: getRequestStatus(state),
        isFinished: getIsFinished(state)

    }),
    {
        clearGameMemory,
        postScore,
        fetchAllScores,

    }
)(Results);


