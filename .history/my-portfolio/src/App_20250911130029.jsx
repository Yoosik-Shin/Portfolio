import { useState, useRef, useContext } from "react";
import * as S from "./App.styled.js";
import { Login } from "./pages/Login/Login.jsx";
import { Header } from "./pages/MenuPage/Header.jsx";
import { MainHome } from "./pages/MenuPage/MainHome.jsx";
import { FstMenu } from "./pages/MenuPage/FstMenu.jsx";
import { SndMenu } from "./pages/MenuPage/SndMenu.jsx";
import { TrdMenu } from "./pages/MenuPage/TrdMenu.jsx";
import { FthMenu } from "./pages/MenuPage/FthMenu.jsx";
import PrivateRoutes from "./pages/Login/PrivateRouter.jsx";
import { LoginContext } from "./pages/Login/LoginContextProvider.jsx";

import { BrowserRouter, Routes, Route, Navigate, useNavigate, NavLink } from "react-router-dom";
import { StartTimer } from "./pages/MenuPage/StartTimer.jsx";
import Footer from "./pages/MenuPage/Footer.jsx";

function App() {
  // useContext(LoginContext)
  return (
    <BrowserRouter>
      <S.AllWrap>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/header" element={<Header />}>
              <Route path="/header/about" element={<FstMenu />} />
              <Route path="/header/snd-menu" element={<SndMenu />} />
              <Route path="/header/trd-menu" element={<TrdMenu />} />
              <Route path="/header/fth-menu" element={<FthMenu />} />
              <Route path="/header/timer-menu" element={<StartTimer />} />
            </Route>
          </Route>
        </Routes>
      </S.AllWrap>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

// if () {
//   alert("로그인 하셨습니다.");
// } else if (!(userId === user.id) && userPw === user.pw) {
//   setErrId("ID가 일치하지 않습니다.");
// } else if (userId === "cat" && !(userPw === "1234")) {
//   setErrPw("PASSWORD가 일치하지 않습니다.");
// } else if (!(userId === "cat" && userPw === "1234")) {
//   setErrMsg(alert("존재하지 않는 사용자입니다."));
// }

//   if (userId === "cat" && userPw === "1234") {
//     alert("로그인 하셨습니다.");
//   } else if (!(userId === "cat") && userPw === "1234") {
//     setErrId("ID가 일치하지 않습니다.");
//   } else if (userId === "cat" && !(userPw === "1234")) {
//     setErrPw("PASSWORD가 일치하지 않습니다.");
//   } else if (!(userId === "cat" && userPw === "1234")) {
//     setErrMsg(alert("존재하지 않는 사용자입니다."));
//   }
// };

/**
 * 변수명을 쓰는 규칙
 * 1. camelCase - 보통 리액트에서는 이거씀
 * 2. PascalCase - 리액트 컴포넌트명은 이걸로 쓰는게 규칙
 * 3. snake_case - 얘는 보통 데이터베이스 column명에 사용
 * 4. kebab-case - url,className에 사용
 *
 * 상수 쓸때는 전부 대문자 사용, _도 사용
 */
