import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const MainHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-3 box-border font-bold text-2xl bg-amber-400">
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <div className="btn btn-primary bg-[#333333a2] w-[100px] h-[40px] rounded-full hover:bg-[#49494988] flex justify-center items-center mb-3">
        <button className="btn btn-primary" onClick={() => navigate("/login")}>로그인</button>
      </div>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
      <h1>MAIN HOME</h1>
    </div>
  );
};

export const Home = styled("div")`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
