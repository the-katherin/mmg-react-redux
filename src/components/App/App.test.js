import React from "react";
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import WelcomeWindow from './WelcomeWindow';
import Form from './Form';
import Game from './Game';
import Results from './Results';


describe("routes", () => {

    jest.mock('react-router-dom');

    test('invalid path should redirect to NotFoundPage', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/random']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(WelcomeWindow)).toHaveLength(0);
        expect(wrapper.find(Form)).toHaveLength(0);
        expect(wrapper.find(Game)).toHaveLength(0);
        expect(wrapper.find(Results)).toHaveLength(0);
        expect(wrapper.find(NotFoundPage)).toHaveLength(1);
    });

    test('valid path should redirect to welcome window', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(WelcomeWindow)).toHaveLength(1);
        expect(wrapper.find(Form)).toHaveLength(0);
        expect(wrapper.find(Game)).toHaveLength(0);
        expect(wrapper.find(Results)).toHaveLength(0);
        expect(wrapper.find(NotFoundPage)).toHaveLength(0);
    });

    test('Form renders on path /form', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/form']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(WelcomeWindow)).toHaveLength(0);
        expect(wrapper.find(Form)).toHaveLength(1);
        expect(wrapper.find(Game)).toHaveLength(0);
        expect(wrapper.find(Results)).toHaveLength(0);
        expect(wrapper.find(NotFoundPage)).toHaveLength(0);
    });

    test('on path /game renders one component', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/game']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper).toHaveLength(1);
    });

    test('on path /results renders one component', () => {

        const wrapper = shallow(
            <MemoryRouter initialEntries={['/results']}>
                <App />
            </MemoryRouter>
        );

        expect(wrapper).toHaveLength(1);

    });


});