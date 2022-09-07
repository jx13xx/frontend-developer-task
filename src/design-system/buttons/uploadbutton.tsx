import { UploadButton, UploadPhoto } from "../components";
import React from "react";

export const UploadPhotoButton = function () {
  return (
    <UploadButton>
      <UploadPhoto type="file" />
    </UploadButton>
  );
};
