import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TypeIt from "typeit-react";

export const MainHome = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[80%] h-[890px] flex flex-col justify-center items-center gap-3 box-border font-bold text-2xl bg-[#bba62e] rounded-2xl">
        <TypeIt
          className="text-center text-4xl h-[300px]"
          options={{
            speed: 10,
            loop: true,
          }}
          getBeforeInit={(instance) => {
            instance
              .type("안녕하세요.")
              .break()
              .break()
              .pause(20)
              .type("저의 Portfolio에 오신걸 환영합니다.")
              .pause(500)
              .move(-12)       // 문장 끝에서 왼쪽으로 11글자 이동(Portfolio 위치)
              .delete(9)       // Portfolio 9글자 삭제
              .pause(300)
              .type("포트폴리오")  // 한글로 다시 타이핑
              .pause(500)
              .move(12)         // 커서 뒤로 이동해 다음 문장 타이핑 준비
              .break()
              .break()
              .pause(20)
              .type("아래 버튼을 눌러 로그인을 해주세요.")
              .pause();
            return instance;
          }}
        />
      <button className="btn btn-primary bg-[#838383a2] w-[200px] h-[90px] rounded-full
                          hover:bg-[#49494988] flex justify-center items-center mb-3 shadow-md hover:shodow-lg
                          active:scale-95 active:shadow-sm transition-transform duration-150"
              onClick={() => navigate("/login")}>로그인</button>
    </div>
  );
};
