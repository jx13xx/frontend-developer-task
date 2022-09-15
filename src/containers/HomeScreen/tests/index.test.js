import React from "react";
import { render } from "@testing-library/react";
import HomeScreen from "../index";
import { IntlProvider } from "react-intl";

describe("<HomeScreen/>", () => {
  it("should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <HomeScreen />
      </IntlProvider>
    );

    expect(firstChild).toMatchSnapshot();
  });
});
