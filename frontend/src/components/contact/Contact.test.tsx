import React from "react";
import renderer from "react-test-renderer";

import Contact from "./Contact";

describe("renders without crashing", () => {
  it("renders correctly", async () => {
    const sendMessage = jest.fn();
    const component = renderer.create(<Contact sendMessage={sendMessage} />);
    expect(component).toMatchSnapshot();
  });
});
