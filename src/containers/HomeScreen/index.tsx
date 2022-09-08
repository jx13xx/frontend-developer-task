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

export default function HomeScreen() {
  return (
    <UserLoginPage>
      <UserForm id="user-form">
        <HeaderUserPage id="user-form-header">
          <RobotText>Become a Member</RobotText>
          <Subtitle>Enter your valid info to get registered</Subtitle>
        </HeaderUserPage>

        <UserFillUpForm>
          <UserInputBlock>
            <Label>Full Name</Label>
            <InputField type="text" placeholder="Your full name here" />
          </UserInputBlock>

          <UserInputBlock>
            <Label>Email Address</Label>
            <InputField type="text" placeholder="Your email address here" />
          </UserInputBlock>
          <UserInputBlock>
            <Label>Company</Label>
            <InputField type="text" placeholder="Your company" />
          </UserInputBlock>
          <UserInputBlock>
            <Label>Company Website</Label>
            <InputField type="text" placeholder="Your company website" />
          </UserInputBlock>

          <SubmitButton>Sign Up Now</SubmitButton>
        </UserFillUpForm>
      </UserForm>
      <CoverImage src={BannerImage} />
    </UserLoginPage>
  );
}
