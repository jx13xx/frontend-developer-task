import {
  HeaderUserPage,
  InputField,
  Label,
  RobotText,
  SubmitButton,
  Subtitle,
  Tagline,
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
import { any, InferProps } from "prop-types";

function HomeScreen({ intl }: HomeScreenTypes) {
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
};

type HomeScreenTypes = InferProps<typeof HomeScreenPropTypes>;

HomeScreen.propTypes = HomeScreenPropTypes;

export default injectIntl(HomeScreen);
