import React from "react";
import { render } from "@testing-library/react";
import HomeScreen from "../index";

describe("<HomeScreen/>", () => {
  it("should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = render(<HomeScreen />);

    expect(firstChild).toMatchSnapshot();
  });
});
