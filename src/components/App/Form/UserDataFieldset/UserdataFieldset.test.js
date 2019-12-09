import React from "react";
import UserDataFieldset from "./UserDataFieldset";

describe("UserDataFieldset", () => {
    test("match snapshot", () => {
        const wrapper = shallow(<UserDataFieldset />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});