import React from "react";
import CardsBackFieldset from "./CardsBackFieldset";

describe("CardsBackFieldset", () => {
    test("match snapshot", () => {
        const wrapper = shallow(<CardsBackFieldset />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});