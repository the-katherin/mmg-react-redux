import React from "react";
import WelcomeWindow from "./WelcomeWindow";

describe("WelcomeWindow", () => {
    test("match snapshot", () => {
        const wrapper = shallow(<WelcomeWindow />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});