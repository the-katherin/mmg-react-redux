import React from "react";
import { Game } from "./Game";

let wrapper;
const generateCards = jest.fn();

describe("Game", () => {
    beforeEach(() => {
        wrapper = shallow(<Game
            userSelection={{ level: 6, cardsBack: 2 }}
            isFinished={false}
            generateCards={generateCards} />)
    });

    test("match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });


});
