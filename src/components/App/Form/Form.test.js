import React from "react";
import Form from "./Form";

import configureStore from 'redux-mock-store';

const initialState = {
    getUserDataFromForm: jest.fn(),
    getUserChoiceFromForm: jest.fn(),
};

const mockStore = configureStore();
let wrapper;
let store;

describe("Form", () => {
    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = mount(<Form store={store} />)
    });

    test("match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('submit button exists', () => {
        const button = wrapper.find('button');
        expect(button).toBeDefined();
    });

});
