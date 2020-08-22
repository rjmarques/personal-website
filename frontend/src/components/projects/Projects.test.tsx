import React from "react";
import renderer from "react-test-renderer";

import Projects from "./Projects";

describe("renders without crashing", () => {
  it("renders correctly", async () => {
    const component = renderer.create(<Projects />);
    expect(component).toMatchSnapshot();
  });
});
