import React from "react";
import LevelFieldset from "./LevelFieldset";

describe("LevelFieldset", () => {
    test("match snapshot", () => {
        const wrapper = shallow(<LevelFieldset />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});