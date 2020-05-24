import React from "react";
import renderer from "react-test-renderer";

import Experience from "./Experience";

describe("renders without crashing", () => {
  it("renders correctly", async () => {
    const component = renderer.create(<Experience />);

    const tree = component.toJSON();
    expect(component).toMatchSnapshot();
  });
});
