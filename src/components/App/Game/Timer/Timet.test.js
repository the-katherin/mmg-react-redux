import React from "react";
import { Timer } from "./Timer";

let wrapper;

describe("Timer", () => {
    beforeEach(() => {
        wrapper = shallow(<Timer
            isFinished={false}
        />)
    });

    test("match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });


});
