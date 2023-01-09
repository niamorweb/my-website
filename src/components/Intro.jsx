import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <section className="intro min-h-[100vh] text-center justify-center gap-14  md:pl-8  mb-32  flex flex-col w-[85%] m-auto items-center ">
      <h1>FRONT-END DEVELOPER</h1>

      <h2 className="text-mainColor text-lg md:text-4xl ">
        <Typewriter
          options={{
            strings: ["Hi, I'm Niamor", "A Web Developer", "Let's work together", "I Love Coding"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </section>
  );
}
