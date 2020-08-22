import React from "react";
import renderer from "react-test-renderer";

import Skills from "./Skills";

describe("renders without crashing", () => {
  it("renders correctly", async () => {
    const component = renderer.create(<Skills />);
    expect(component).toMatchSnapshot();
  });
});
