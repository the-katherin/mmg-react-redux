import React from "react";
import { Card } from "./Card";

let wrapper;

describe("Card", () => {
    beforeEach(() => {
        wrapper = shallow(<Card
            handleClick={jest.fn()}
            cardNumber={1}
            id={2}

        />)
    });

    test("match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });


});
