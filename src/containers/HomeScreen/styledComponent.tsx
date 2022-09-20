import styled from "styled-components";

export const UserLoginPage = styled.div`
  background-color: #242424;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  position: fixed;
`;

export const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 103px;
  margin-top: 158px;
`;
export const UserFillUpForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const CoverImage = styled.img`
  pointer-events: none;
  position: absolute;
  bottom: -15%;
  right: -10%;
  height: 800px;
  overflow: hidden;
  @media screen and (max-width: 842px) {
    display: none;
  }
`;

export const UserImageInput = styled.input`
  display: none;
  width: 100%;
`;
