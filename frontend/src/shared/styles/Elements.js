import styled from "styled-components";

export const AppButtonWrapper = styled.button`
  background-color: black;
  padding: 15px 50px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: medium;
  border: 0px;
  text-decoration: none;

  &:hover {
    background: gray;
    color: black;
  }

`;

export const Lable = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const InputField = styled.input`
  border-radius: 5px;
  padding: 10px 10px;
  margin: 10px 10px;
  margin-left: 30px;
`;