import React, { useContext, useMemo } from "react";
import { useState, useRef, useEffect } from "react";
import { LoginContext } from "./LoginContextProvider";

// timer app
export const LogoutTimer = () => {
  const loggedOut = useContext(LoginContext);

  const getExpireTime = localStorage.getItem("user");
  // const expireGoals = new Date(getExpireTime).getTime()
  const expireGoals = new Date(getExpireTime)
  const currentTime = new Date()
  const distance = expireGoals - currentTime;
  // const leftTime = Math.floor(distance);
  // const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState('');
  const [timerMinutes, setTimerMinutes] = useState('');
  const [timerSeconds, setTimerSeconds] = useState('');

  let interval = useRef();

  const initHours = useMemo(() => {
    return timerHours.toString().padStart("2", 0);
  }, [timerHours]);

  const formatMinutes = useMemo(() => {
    return timerMinutes.toString().padStart("2", 0);
  }, [timerMinutes]);

  const formatSeconds = useMemo(() => {
    return timerSeconds.toString().padStart("2", 0);
  }, [timerSeconds]);

  // console.log(initHours, formatMinutes, formatSeconds);
  // console.log(timerHours, timerMinutes, timerSeconds);


  if (initHours === 0 && formatMinutes === 10 && formatSeconds === 0) {
    alert('로그아웃까지 10분 남았습니다.')
  }



  const startTimer = () => {
    // let interval = useRef();

    interval = setInterval(() => {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval)
        loggedOut.loggedOut()
      } else {
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      {initHours}:{formatMinutes}:{formatSeconds}
    </div>
  );
};

// const initHours = useMemo(() => {
//   return timerHours.toString().padStart('2', 0)
// }, [timerHours])

// const formatMinutes = useMemo(() => {
//   return timerMinutes.toString().padStart('2', 0)
// }, [timerMinutes])

// const formatSeconds = useMemo(() => {
//   return timerSeconds.toString().padStart('2', 0)
// }, [timerSeconds])




// setInterval 이전 내용
// if (timerHours > 0 && timerMinutes === 0 && timerSeconds === 0) {
//   setTimerHours(timerHours - 1);
//   setTimerMinutes(59);
//   setTimerSeconds(59);
// }

// if (timerHours === 0 && timerMinutes > 0 && timerSeconds > 0) {
//   setTimerSeconds(timerSeconds - 1)
// }

// if (timerHours > 0 && timerMinutes > 0 && timerSeconds > 0) {
//   setTimerSeconds(timerSeconds - 1);
// }

// if (timerHours > 0 && timerMinutes > 0 && timerSeconds === 0) {
//   setTimerMinutes(timerMinutes - 1);
//   setTimerSeconds(59);
// }

// if (timerHours > 0 && timerMinutes === 0 && timerSeconds > 0) {
//   setTimerSeconds(timerSeconds - 1);
// }

// if (timerHours === 0 && timerMinutes > 0 && timerSeconds === 0) {
//   setTimerMinutes(timerMinutes - 1);
//   setTimerSeconds(59);
// }

// if (timerHours === 0 && timerMinutes === 0 && timerSeconds > 0) {
//   setTimerSeconds(timerSeconds - 1);
// }

// if (timerHours === 0 && timerMinutes === 0 && timerSeconds === 0) {
//   loggedOut.loggedOut();
//   return () => clearInterval(interval.current);
// }