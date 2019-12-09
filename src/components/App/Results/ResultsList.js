import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { selectTopResults } from '../../../selectors'


export class ResultsList extends Component {

    render() {

        const topResults = this.props.topResults;


        return (
            <ol className='results__list'>
                {
                    topResults.map(
                        (item, index) =>
                            <li key={index}>
                                {item.username}: {item.score}
                            </li>)
                }
            </ol>
        );
    }
};


ResultsList.propTypes = {
    topResults: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};


export default connect(
    selectTopResults
)(ResultsList);