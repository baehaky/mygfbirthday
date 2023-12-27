import React, { useEffect, useState, useRef } from "react";
import Mainpage from "../layouts/Mainpage";

const Countdown = () => {
  const [timerDays, setDays] = useState("00");
  const [timerHours, setHours] = useState("00");
  const [timerMinutes, setMinutes] = useState("00");
  const [timerSeconds, setSeconds] = useState("00");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("December 27, 2023 23:59:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval.current);
      } else {
        setDays(days.toString().padStart(2, "0"));
        setHours(hours.toString().padStart(2, "0"));
        setMinutes(minutes.toString().padStart(2, "0"));
        setSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  if (timerSeconds + timerDays + timerHours + timerMinutes == 0) {
    return <Mainpage />;
  } else {
    return (
      <div className="min-w-screen min-h-screen flex flex-wrap items-center justify-center px-5 py-5 bg-primary">
        <div className="text-white" id="absen">
          <h1 className="text-3xl underline text-center mb-3 font-extralight uppercase">
            Countdown
          </h1>
          <div className="text-6xl text-center flex flex-wrap w-full items-center justify-center">
            <div className="w-24 mx-1 p-2 bg-secondary shadow-xl text-white mt-3 rounded-lg">
              <div className="font-mono leading-none" x-text="days">
                {timerDays}
              </div>
              <div className="font-mono uppercase text-sm leading-none">
                Days
              </div>
            </div>
            <div className="w-24 mx-1 p-2 bg-secondary shadow-lg text-white mt-3 rounded-lg">
              <div className="font-mono leading-none" x-text="hours">
                {timerHours}
              </div>
              <div className="font-mono uppercase text-sm leading-none">
                Hours
              </div>
            </div>
            <div className="w-24 mx-1 p-2 bg-secondary shadow-lg text-white mt-3 rounded-lg">
              <div className="font-mono leading-none" x-text="minutes">
                {timerMinutes}
              </div>
              <div className="font-mono uppercase text-sm leading-none">
                Minutes
              </div>
            </div>
            <div className="w-24 mx-1 p-2 bg-secondary shadow-lg text-white mt-3 rounded-lg">
              <div className="font-mono leading-none" x-text="seconds">
                {timerSeconds}
              </div>
              <div className="font-mono uppercase text-sm leading-none">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Countdown;
