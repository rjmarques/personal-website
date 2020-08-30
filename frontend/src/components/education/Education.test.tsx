import React from "react";
import renderer from "react-test-renderer";

import Education from "./Education";

describe("renders without crashing", () => {
  it("renders correctly", async () => {
    const component = renderer.create(<Education />);
    expect(component).toMatchSnapshot();
  });
});
