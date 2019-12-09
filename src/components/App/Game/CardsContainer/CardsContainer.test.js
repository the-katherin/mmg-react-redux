import React from "react";
import { CardsContainer } from "./CardsContainer";

let wrapper;

describe("CardsContainer", () => {
    beforeEach(() => {
        wrapper = shallow(<CardsContainer
            cards={[]}
            userSelection={{ level: 6, cardsBack: 2 }}
            isFinished={false}
        />)
    });

    test("match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });


});
