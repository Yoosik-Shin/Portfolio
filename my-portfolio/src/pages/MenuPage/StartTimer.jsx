import React from "react";
import { useState, useRef, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiCalendarClock } from "@mdi/js";


  // timer app
  export const StartTimer = () => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef(null);

    useEffect(() => {
    const countdownDate = new Date("Sep 25, 2025 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);

    // cleanup on unmount
    return () => clearInterval(interval.current);
  }, []);

    return (
      <section className="timer-container">
        <section className="timer flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <Icon path={mdiCalendarClock} size={2} className="timer-icon" />
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-7">
            <h2>Countdown Timer</h2>
            <p className="w-auto font-bold size-2.5">AI활용 풀스택(프론트엔드,백엔드)부트캠프(자바,파이썬,플러터)</p>
            <p className="w-auto font-bold size-2.5">종강까지!</p>
          </div>
          <div className="w-auto flex gap-3.5 font-bold text-2xl">
            <section className="flex">
              <p>{timerDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <section className="flex">
              <p>{timerHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <section className="flex">
              <p>{timerMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <section className="flex">
              <p>{timerSeconds}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    );
  };


// componentDidMount
// useEffect(() => {
//   StartTimer();
//   return () => {
//     clearInterval(interval.current);
//   };
// });
