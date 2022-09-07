import React from "react";
import {
  HeadingOne,
  InputField,
  Paragraph,
  RobotText,
  SubmitButton,
  Subtitle,
  Tagline,
  UploadButton,
  UploadPhoto,
} from "./design-system/components";

function App() {
  function getUploadButton() {
    return (
      <UploadButton>
        <UploadPhoto type="file" />
      </UploadButton>
    );
  }

  return <div className="App" style={{ backgroundColor: "black" }}></div>;
}

export default App;
