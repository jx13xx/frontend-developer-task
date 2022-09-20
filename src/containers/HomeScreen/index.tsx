import {
  HeaderUserPage,
  InputField,
  Label,
  RobotText,
  SubmitButton,
  Subtitle,
  UploadButton,
  UploadPhoto,
} from "../../design-system/components";
import {
  CoverImage,
  UserFillUpForm,
  UserForm,
  UserInputBlock,
  UserLoginPage,
} from "./styledComponent";
import BannerImage from "images/Accent-Elements.svg";
import { injectIntl } from "react-intl";
import messages from "./messages";
import PropTypes, { any, InferProps } from "prop-types";
import React, { useRef } from "react";

function HomeScreen({ intl }: HomeScreenTypes) {
  const uploadRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    if (uploadRef.current != null) {
      uploadRef.current.click();
    }
  };

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    return fileObj;
  }

  return (
    <UserLoginPage>
      <UserForm id="user-form">
        <HeaderUserPage id="user-form-header">
          <RobotText>{intl.formatMessage(messages.headingText)}</RobotText>
          <Subtitle>{intl.formatMessage(messages.descriptionText)}</Subtitle>
        </HeaderUserPage>

        <UserFillUpForm>
          <UserInputBlock>
            <Label>{intl.formatMessage(messages.fullNameLabel)}</Label>
            <InputField
              type="text"
              placeholder={intl.formatMessage(messages.fullNamePlaceHolder)}
            />
          </UserInputBlock>

          <UserInputBlock>
            <Label>{intl.formatMessage(messages.emailAddressLabel)}</Label>
            <InputField
              type="text"
              placeholder={intl.formatMessage(messages.emailAddressPlaceHolder)}
            />
          </UserInputBlock>
          <UserInputBlock>
            <Label>{intl.formatMessage(messages.companyLabel)}</Label>
            <InputField
              type="text"
              placeholder={intl.formatMessage(messages.companyLabelPlaceHolder)}
            />
          </UserInputBlock>
          <UserInputBlock>
            <Label>{intl.formatMessage(messages.companyWebsiteLabel)}</Label>
            <InputField
              type="text"
              placeholder={intl.formatMessage(
                messages.companyWebsitePlaceHolder
              )}
            />
          </UserInputBlock>
          <UploadButton onClick={handleUpload} data-testid="upload-btn">
            <UploadPhoto
              data-testid="upload-image-input"
              ref={uploadRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {intl.formatMessage(messages.uploadButton)}
          </UploadButton>
          <SubmitButton>
            {intl.formatMessage(messages.signUpButton)}
          </SubmitButton>
        </UserFillUpForm>
      </UserForm>
      <CoverImage src={BannerImage} />
    </UserLoginPage>
  );
}

const HomeScreenPropTypes = {
  intl: any,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

type HomeScreenTypes = InferProps<typeof HomeScreenPropTypes>;

HomeScreen.propTypes = HomeScreenPropTypes;

export default injectIntl(HomeScreen);
