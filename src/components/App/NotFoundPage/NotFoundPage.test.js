import React from "react";
import NotFoundPage from "./NotFoundPage";

let wrapper;

describe("NotFoundPage", () => {

    console.log(NotFoundPage);

    beforeEach(() => {
        wrapper = shallow(<NotFoundPage />)
    });

    test("match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('redirection button exists', () => {
        const button = wrapper.find('button');
        expect(button).toBeDefined();
    });

});
