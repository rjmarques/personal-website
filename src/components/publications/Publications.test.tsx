import React from "react";
import renderer from "react-test-renderer";

import Publications from "./Publications";

describe("renders without crashing", () => {
  it("renders correctly", async () => {
    const component = renderer.create(<Publications />);

    const tree = component.toJSON();
    expect(component).toMatchSnapshot();
  });
});
