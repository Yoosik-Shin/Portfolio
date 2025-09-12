import React, { createContext, useEffect, useState, useMemo } from "react";
import Cookies from "js-cookie";
import setCookie from "./setCookie";
import { useNavigate } from "react-router-dom";

const loginStateCookie = Cookies.get('loginState')

export const LoginContext = createContext();
LoginContext.displayName = "LoginContextName";

const LoginContextProvider = ({ children }) => {
  // context value : 로그인 여부, 로그아웃 함수
  const [isLogin, setIsLogin] = useState(loginStateCookie !== null ? true : false);

  const out = useNavigate();

  const loginState = useMemo(() => ({isLogin, setIsLogin}), [isLogin, setIsLogin])

  const login = (nick) => {
    setIsLogin(true)
    setCookie(nick)
  }
  const loggedOut = () => {
    setIsLogin(false);
    Cookies.remove("loginState");
    Cookies.remove("user");
    localStorage.removeItem('user');
    // window.location.reload();

  };

  
  return <LoginContext.Provider value={{ loginState, isLogin, login, loggedOut }}>{children}</LoginContext.Provider>;
};

export default LoginContextProvider;
