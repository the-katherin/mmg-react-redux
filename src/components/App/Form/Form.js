import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LevelFieldset from "./LevelFieldset";
import UserDataFieldset from "./UserDataFieldset";
import CardsBackFieldset from "./CardsBackFieldset";
import { getUserChoiceFromForm, getUserDataFromForm } from '../../../actions'

export class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

    }

    submitForm = (e) => {
        e.preventDefault();
        let form = e.target;
        let userName = form.userData.elements[0].value;
        let userLastName = form.userData.elements[1].value;
        let userEmail = form.userData.elements[2].value;;
        let level = form.level.value;
        let cardsBack = form.cardsBack.value;

        this.props.getUserChoiceFromForm(level, cardsBack);
        this.props.getUserDataFromForm(userName, userLastName, userEmail);
        this.setState({ redirect: true });

    }


    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/game' />;
        }


        return (
            <form className='form' name='userSelectionForm' onSubmit={this.submitForm} >

                <UserDataFieldset />
                <LevelFieldset />
                <CardsBackFieldset />

                <button className='form__submit-btn' type='submit' >Let's play</button>

            </form>
        );
    }
}

Form.propTypes = {
    getUserDataFromForm: PropTypes.func.isRequired,
    getUserChoiceFromForm: PropTypes.func.isRequired,
}

export default connect(
    null,
    {
        getUserDataFromForm,
        getUserChoiceFromForm
    }
)(Form);