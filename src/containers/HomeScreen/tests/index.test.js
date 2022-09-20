import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-test-renderer";
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

  it("should be able to upload the picture when the upload button is clicked", async () => {
    act(() => {
      const { getByTestId } = render(
        <IntlProvider locale="en">
          <HomeScreen />
        </IntlProvider>
      );

      const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });
      const inputImageFile = getByTestId(/upload-image-input/i);
      const uploadButton = getByTestId(/upload-btn/i);

      fireEvent.click(uploadButton);
      fireEvent.change(inputImageFile, {
        targe: { files: [fakeFile] },
      });

      expect(inputImageFile).toBeDefined();
      expect(uploadButton).toBeDefined();
    });
  });
});
