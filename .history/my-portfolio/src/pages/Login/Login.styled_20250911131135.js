import styled from "styled-components";



export const LoginWrap = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 330px;
  height: 600px;
  
  padding: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 3px solid;
  border-bottom: 3px solid;
  box-shadow: 5px 5px 0px 0px #333333;
`;

export const TitleWrap = styled("div")`
  display: flex;
  align-items: center;
`;

export const Title = styled("div")`
  width: 70px;

`;

export const Input = styled("input")`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border-top: 1px;
  border-bottom: 1.5px solid;
  border-left: 1px;
  border-right: 1px;
  outline: 0px;

`;

export const Btn = styled("button")`
  width: 98%;
  height: 40px;
`;

export const Line = styled("div")`
  width: 98%;
  height: 2px;
  background-color: gray;
`;

export const Msg = styled("div")`
  color: red;
`;
