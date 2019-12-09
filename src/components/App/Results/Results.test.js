import React from "react";
import { Results } from "./Results";

let wrapper;

const clearResultsMemory = jest.fn();
const postScore = jest.fn();
const fetchAllScores = jest.fn();

describe("Results", () => {
    beforeEach(() => {
        wrapper = shallow(<Results
            clearResultsMemory={clearResultsMemory}
            postScore={postScore}
            fetchAllScores={fetchAllScores}
            userData={{ name: '', lastName: '', email: '' }}
            userScore={5}
            requestStatus={'isFetching'}


        />)
    });

    test("match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });


});
