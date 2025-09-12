import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TypeIt from "typeit-react";
import mainvid from "../../assets/video/mainvid.mp4";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoginContextProvider, { LoginContext } from "../Login/LoginContextProvider";
import Swal from 'sweetalert2'

export const MainHome = () => {
  const [open, setOpen] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const loggedIn = useContext(LoginContext)

  const refID = useRef(null);
  const refPW = useRef(null);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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
          // alert("로그인 하셨습니다.");
          Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: "Welcome to my portfolio!",
                      showConfirmButton: false,
                      timer: 1500
                    });
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
        setErrMsg("비밀번호가 일치하지 않습니다.");
        return;
      }
    }

    if (pwChk.length > 0) {
      if (!pwChk.some((item) => item.id === userID)) {
        setErrMsg("아이디가 일치하지 않습니다.");
        return;
      }
    }

    if (idChk.length === 0 && pwChk.length === 0) {
      setErrMsg("일치하는 사용자가 없습니다.");
      return;
    }

    // console.log(idChk);
    // console.log(pwChk);
  };


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
    <>
    <div className="relative w-[80%] h-[890px] flex flex-col justify-center items-center gap-3 box-border font-bold text-2xl rounded-2xl">
    {/* <div className="relative w-full h-screen overflow-hidden"> */}
      {/* 배경 영상 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={mainvid} type="video/mp4" />
      </video>
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-[#25252591]"></div>
        <TypeIt
          className="text-center text-4xl h-[300px] text-[#d8d8d8d7] z-10"
          options={{
            speed: 10,
            loop: false,
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
                          active:scale-95 active:shadow-sm transition-transform duration-150 z-10"
              variant="outlined" onClick={handleClickOpen}>입장하기</button>
    </div>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-center">Login</DialogTitle>
        <DialogContent className="w-xl h-[300px] flex flex-col justify-center items-center gap-5 m-10">
          <div className="flex relative justify-center items-center m-3 gap-5">
            <div className="text-xl">ID</div>
            <input ref={refID} defaultValue="user" placeholder="ID"
                    className="outline m-3 rounded-md "></input>
          </div>
          <div className="flex relative justify-center items-center m-3 gap-1.5">
            <div className="text-xl">PW</div>
            <input type="password" ref={refPW} defaultValue="user" placeholder="PW"
                    className="outline m-3 rounded-md"></input>
          </div>
          <button className="btn btn-primary flex justify-center items-center bg-[#fff27ae8] w-[50%] h-[40px] rounded-full hover:bg-[#ffec3ee8]
                              active:scale-95 active:shadow-sm transition-transform duration-150"
                              onClick={onBtn}>{"로그인"}</button>
          <div className="text-[#eb0000]">{errMsg}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};



// onClick={() => navigate("/login")}