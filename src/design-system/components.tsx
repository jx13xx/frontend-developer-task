import styled from "styled-components";

export const PrescriptionUploadButton = styled.button`
  color: white;
  position: absolute;
  bottom: 100px;
  height: 48px;
  width: 90%;
  /* BG/Primary */
  background: #00664f;
  border-radius: 12px;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(129.06deg, #aefb2a -21.26%, #57ebde 71.47%);
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  display: flex;
  width: 100%;
`;

export const HeaderUserPage = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 78px;
`;

export const InputField = styled.input`
  width: 416px;
  background: #2d2d2d;
  border-color: #2d2d2d;
  color: #969696;
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  &:focus {
    outline-color: #aefb2a;
    border: 1px solid #57ebde;
  }
`;

export const Label = styled.label`
  width: 82px;
  height: 21px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
`;

export const RobotText = styled.text`
  width: 121px;
  height: 53px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 53px;
  display: inline-block;
  white-space: nowrap;
  /* identical to box height */

  color: #ffffff;
`;

export const HeadingOne = styled.text`
  width: 186px;
  height: 29px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;

  color: #ffffff;
`;

export const Tagline = styled.text`
  width: 127px;
  height: 23px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
`;

export const Subtitle = styled.text`
  width: 121px;
  height: 21px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
  display: inline-block;
  white-space: nowrap;
`;

export const Paragraph = styled.p`
  width: 142px;
  height: 21px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
`;
export const UploadButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 4px;

  width: 415px;
  height: 50px;

  background: #2d2d2d;
  &:focus {
    outline-color: #aefb2a;
    border: 1px solid #57ebde;
  }
`;
export const UploadPhoto = styled.input`
  display: none;
`;
