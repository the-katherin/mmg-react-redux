import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIsFinished } from "../../../../selectors";
import { getTime } from '../../../../actions';

export class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { time: 0 };

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {

        if (this.props.isFinished) {
            this.props.dispatch(getTime(this.state.time));
        }

        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prevState) => ({
            time: prevState.time + 1
        }));
    }

    render() {
        return (
            <div className="timer">
                <h3> Time: {this.state.time}</h3>
            </div>
        );
    }
};


Timer.propTypes = {
    isFinished: PropTypes.bool.isRequired,
};

export default connect(
    state => ({
        isFinished: getIsFinished(state),
    }),

)(Timer);
