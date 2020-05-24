import React from "react";
import renderer from "react-test-renderer";

import Bio from "./Bio";

describe("renders without crashing", () => {
  it("renders correctly", async () => {
    const component = renderer.create(<Bio />);

    const tree = component.toJSON();
    expect(component).toMatchSnapshot();
  });
});
