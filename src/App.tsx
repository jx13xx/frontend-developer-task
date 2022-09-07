import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  HeadingOne,
  InputField,
  Paragraph,
  PrescriptionUploadButton,
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

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <SubmitButton>Submit</SubmitButton>
      <InputField />
      <RobotText>Robot Text</RobotText>
      <HeadingOne>This is Heading One</HeadingOne>
      <Tagline>This is the tagline</Tagline>
      <Subtitle>This is subtile text</Subtitle>
      <Paragraph>This is some random sample paraggramphs</Paragraph>
      {getUploadButton()}
    </div>
  );
}

export default App;
