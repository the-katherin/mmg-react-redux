import React from "react";
import { ResultsList } from "./ResultsList";

let wrapper;


describe("ResultsList", () => {
    beforeEach(() => {
        wrapper = shallow(<ResultsList
            topResults={[]}
        />)
    });

    test("match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });


});
