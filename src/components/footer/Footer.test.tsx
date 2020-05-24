import React from "react";
import renderer from "react-test-renderer";

import Footer from "./Footer";

describe("renders without crashing", () => {
  it("renders correctly", async () => {
    const component = renderer.create(<Footer />);

    const tree = component.toJSON();
    expect(component).toMatchSnapshot();
  });
});
