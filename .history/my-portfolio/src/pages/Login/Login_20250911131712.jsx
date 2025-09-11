import { useState, useRef, useContext } from "react";
import * as S from "./Login.styled";
import { useNavigate } from "react-router-dom";
import setCookie from "./setCookie";
import LoginContextProvider, { LoginContext } from "./LoginContextProvider";
import TypeIt from "typeit-react";

export const Login = () => {
  const [errMsg, setErrMsg] = useState("");
  const loggedIn = useContext(LoginContext)

  const refID = useRef(null);
  const refPW = useRef(null);

  const navigate = useNavigate();

  const loginChk = (userJSON, userID, userPw) => {
    // filter, some 찾아보고
    // filter => 조건에 맞는거 데이터 전체 리턴
    // some => 조건에 맞는거 있으면 true

    // 아이디, 비번 둘다 조건 맞는게 있니?

    setErrMsg("");
    if (userJSON.some((item) => item.id === userID && item.pw === userPw)) {
      // let date = new Date()
      // let fiftyMin = date.getTime() + 15*60*1000
      // let thrHour = date.setHours(date.getHours() + 3)
      // console.log(thrHour)
      const name = userJSON.filter(item => item.id === userID && item.pw === userPw)
      if(name.length === 1) {
        // setCookie(name[0].nick)
        loggedIn.login(name[0].nick)
        // Cookies.set('user', name[0].nick, {expires: 1})
        // Cookies.set('loginState', true)
        setTimeout(() => {
          alert("로그인 하셨습니다.");
          navigate("/header/about");
        }, 0);
      } else {
        alert('땡')
      }
      // SetCookie(userID, );
      // console.log(SetCookie);

      return;
    }
    // idChk, pwChk는 배열? filter는 애초에 배열에 쓰는 놈
    const idChk = userJSON.filter((item) => item.id === userID);
    const pwChk = userJSON.filter((item) => item.pw === userPw);

    // console.log(idChk, pwChk);

    if (idChk.length > 0) {
      if (!idChk.some((item) => item.pw === userPw)) {
        setErrMsg("비밀번호가 일치하지 않음");
        return;
      }
    }

    if (pwChk.length > 0) {
      if (!pwChk.some((item) => item.id === userID)) {
        setErrMsg("아이디가 일치하지 않음");
        return;
      }
    }

    if (idChk.length === 0 && pwChk.length === 0) {
      setErrMsg("일치하는 사용자 없음");
      return;
    }

    // console.log(idChk);
    // console.log(pwChk);
  };

  // const loginForm = (e) => {
  //   e.preventDefault();
  //   const user = [
  //     {
  //       id: "cat",
  //       pw: "1234",
  //     },
  //     {
  //       id: "dog",
  //       pw: "4321",
  //     },
  //     {
  //       id: "cat",
  //       pw: "5555",
  //     },
  //   ];

  //   // user.filter(item => {item.id === userId})

  //   const userId = e.target.user.value;
  //   const userPw = e.target.pw.value;

  //   loginChk(user, userId, userPw);
  // };

  const onBtn = () => {
    const user = [
      {
        id: "cat",
        pw: "1234",
        nick: "냥",
      },
      {
        id: "dog",
        pw: "4321",
        nick: "멍",
      },
      {
        id: "dog",
        pw: "123",
        nick: "멍멍",
      },
      {
        id: "user",
        pw: "user",
        nick: "portfolio",
      },
    ];

    // user.filter(item => {item.id === userId})

    const userId = refID.current.value;
    const userPw = refPW.current.value;

    loginChk(user, userId, userPw);
  };

  return (
    <div className="flex flex-col justify-center items-center">
    <S.LoginWrap>
      {/* <LoginContext.Provider> */}
      <TypeIt className="w-full h-[150px] text-center"
      options={{
        speed: 20, // 타이핑 속도 (밀리초 단위, 기본값은 50~100 정도)
      }}
      getBeforeInit={(instance) => {
        instance
          .type("😁 환영합니다 😁")
          .break()
          .break()
          .pause(30)
          .type("아래 로그인 버튼을 누르시면")
          .break()
          .break()
          .pause(30)
          .type("바로 들어가실 수 있어요 🔓")
        return instance;
      }}
    />
      <div className="title-wrap flex justify-center items-center mb-3">
        <S.Title>{"아이디"}</S.Title>
        <S.Input ref={refID} defaultValue="user" placeholder="ID"></S.Input>
      </div>
      <S.TitleWrap>
        <S.Title>{"비밀번호"}</S.Title>
        <S.Input type="password" ref={refPW} defaultValue="user" placeholder="PW"></S.Input>
      </S.TitleWrap>
      <S.Line />
      <button className="btn btn-primary bg-[#ff9d9da2] w-[98%] h-[40px] rounded-full hover:bg-[#ec404088]
                          active:scale-95 active:shadow-sm transition-transform duration-150"
                          onClick={onBtn}>{"로그인"}</button>
      <S.Msg>{errMsg}</S.Msg>
      {/* </LoginContext.Provider> */}
      {/* <form className="loginSet" onSubmit={loginForm}> */}
      {/* <div>
            <p>{errMsg}</p>
          </div>
          <div>
            <input type="text" name="user" placeholder="USER ID" />
          </div>
          <p className="errId">{errId}</p>
          <div>
            <input type="password" name="pw" placeholder="USER PASSWORD" />
          </div>
          <p className="errPw">{errPw}</p>
          <input type="submit" value="LOGIN" /> */}
      {/* </form> */}
    </S.LoginWrap>
      <TypeIt className="absolute text-center bottom-0"
      options={{
        speed: 20, // 타이핑 속도 (밀리초 단위, 기본값은 50~100 정도)
        loop: true,
      }}
      getBeforeInit={(instance) => {
        instance
          .type("번거롭게 해드려 죄송합니다..... 만들었는데 어디 놔둘데가 없어서 여기에 넣어놨어요...");
        return instance;
      }}
    />
    </div>
  );
};
