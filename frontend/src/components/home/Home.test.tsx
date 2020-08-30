import React from "react";
import renderer from "react-test-renderer";

import Home from "./Home";

describe("renders without crashing", () => {
  it("renders correctly", async () => {
    const goToContact = jest.fn();
    const component = renderer.create(<Home goToContact={goToContact} />);
    expect(component).toMatchSnapshot();
  });
});
