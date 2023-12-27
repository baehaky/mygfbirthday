import img_maureen from "../assets/maureen.png";
import { ReactFloatingBalloons } from "react-floating-balloons";
import Card from "./Card";
import React from "react";
export default function Wishes() {
  const supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;
  return (
    <>
      <section className="bg-primary flex w-full gap-x-5 justify-center align-middle items-center flex-col lg:flex-row lg py-10 lg:px-20">
        <div className="w-[80%] flex justify-center">
          <div className="bg-secondary rounded-t-full w-[500px] lg:w-[450px] flex justify-center pt-5">
            <img
              src={img_maureen}
              className="w-auto h-auto mb-5"
              alt="maureen profile"
            />
          </div>
        </div>
        <div className="flex justify-center w-[80%] md:w-[62%] lg:w-[100%]">
          <div className="lg:w-full w-[100%] md:text-center mt-5 lg:text-left">
            <h1 className="text-third text-">
              <span className="font-bold underline">Happy Birthday</span>,
              Maureen Audilia! <br />
              <br />
              On this special day, I want to send you all my love and warmest
              wishes. May your heart be filled with joy as you celebrate another
              year of life. You have a way of spreading love and happiness to
              those around you, and I am grateful to have you in my life. Your
              loving nature is truly inspiring, and I hope this day brings you
              all the love and happiness you deserve.
            </h1>
          </div>
        </div>
      </section>
      <div className="inline-flex items-center justify-center w-full bg-primary">
        <hr className="w-64 h-1 my-8 bg-white border-0 rounded" />
        <div className="absolute px-4 -translate-x-1/2 left-1/2 bg-secondary">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>
      <section className="bg-secondary">
        <Card />
      </section>
      <ReactFloatingBalloons
        count={10}
        msgText="Happy Birthday"
        colors={["orange", "purple", "blue"]}
        popVolumeLevel={0.1}
      />
    </>
  );
}
