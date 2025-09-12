import React from "react";
import user from "../../assets/img/user.png";
import profile from "../../assets/img/profile.png";
import home from "../../assets/img/home.png";
import setting from "../../assets/img/settings.png";
import logout from "../../assets/img/logout.png";
import * as M from "./DropContainer.styled.js";
import DropdownItem from "./DropdownItem.jsx";
import { useState, useRef, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import LoginContextProvider, { LoginContext } from "../Login/LoginContextProvider.jsx";
import { LogoutTimer } from "../Login/LogoutTimer.jsx";
import { LuCircleUser } from "react-icons/lu";

export const DropContainer = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const loggedOut = useContext(LoginContext);
  const opMenu = () => {
    setOpen(!open);
  };

  //메뉴 외부 클릭시 메뉴 닫힘
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    //왜??????????????????
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const getCookieNick = Cookies.get("user");

  const getExpireHours = new Date(localStorage.getItem('user')).toString()
  console.log(getExpireHours)

  // const getExpire = (key) => {
  //   const getLocalExpire = localStorage.getItem(key)
  //   return getLocalExpire ? new Date(getLocalExpire) : null;
  // }
  // console.log(getExpire('user'))


  // const parseLocalExpire = JSON.parse(getLocalExpire).expireTime
  // const countdownTime = new Date(JSON.parse(getLocalExpire).expireTime).getTime('00:00:00');
  // console.log(countdownTime)
  // const distance = countdownTime - new Date().getHours()
  // console.log(distance)

  // {useLogoutTimer.timerDays}
  // const getLocalItem = localStorage.getItem(key)
  // const getCookieTimeOut = Cookies.get()

  // const Logout = () => {
  //   Cookies.remove("loginState");
  //   Cookies.remove("user");
  //   localStorage.removeItem('');
  //   window.location.reload()
  // }

  // const MoveHome = () => {
  //   const navigate = useNavigate()
  //   navigate('/header')
  // }

  return (
    // <LoginContext.Provider>
      <M.MenuContainer ref={menuRef}>
        <M.MenuTrigger onClick={opMenu}>
          <img src={user} alt=""></img>
        </M.MenuTrigger>
        {/* <LuCircleUser onClick={opMenu}/> */}
        <M.DropdownMenu className={`${open ? "active" : "inactive"}`}>
          <h3>
            {getCookieNick}님
            <br />
            <span>환영합니다.</span>
          </h3>
          <div><LogoutTimer/></div>
          <ul>
            <DropdownItem to="/header" img={home} text={"Home"} />
            <DropdownItem img={profile} text={"Profile"} />
            <DropdownItem img={setting} text={"Settings"} />
            <DropdownItem img={logout} text={"Logout"} onClick={loggedOut.loggedOut} />
          </ul>
        </M.DropdownMenu>
      </M.MenuContainer>
    // </LoginContext.Provider>
  );
};

// 메뉴 외부클릭시 메뉴닫힘 연습
// const menuRef = useRef();
//   const triggerRef = useRef();

//   const opMenu = () => {
//     setOpen(!open);
//   };

//     window.addEventListener("click", (e) => {
//       if (e.target !== (menuRef.current && triggerRef.current)) {
//         setOpen(false);
//         console.log(menuRef.current);
//       }
//     });
