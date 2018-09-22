import * as React from "react";
import * as renderer from "react-test-renderer";
import App from "./App";

describe("renders without crashing", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
