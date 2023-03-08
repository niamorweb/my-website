import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Header({ linkLinkedin, linkGitHub }) {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleMenuMobile = () => {
    setShowNavMobile(!showNavMobile);
  };

  return (
    <header className="bg-transparent z-10 absolute left-0 right-0 top-0 flex items-baseline justify-between gap-8 px-6 py-4 lg:py-8 lg:px-14 ">
      <h2 className="brand_logo text-lg font-secondary leading-[35px] font-secondary lg:text-[25px]">
        My portfolio
      </h2>
      <div
        onClick={() => handleMenuMobile()}
        className="md:hidden cursor-pointer p-2 rounded-full flex justify-center items-center"
      >
        {showNavMobile ? (
          <i class="fa-sharp fa-solid fa-xmark z-20"></i>
        ) : (
          <i class="fa-sharp fa-solid fa-bars z-20"></i>
        )}
      </div>
      <div
        className="md:hidden fixed duration-200 top-0 right-0 w-[15rem] bg-white h-screen flex flex-col py-[28%] justify-start items-start px-[10%] gap-12"
        style={{
          transform: showNavMobile ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {" "}
        <ul className="flex gap-4 flex-col font-secondary items-left ">
          <li>
            <a href="#about_me">About me</a>{" "}
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="links flex items-center gap-4 ">
          <a href={linkGitHub} target="_blank">
            <i class="fa-brands fa-github scale-150 "></i>
          </a>
          <a href={linkLinkedin} className="ml-1">
            <i class="fa-brands fa-linkedin scale-150"></i>
          </a>
        </div>
      </div>
      <div className="hidden md:flex gap-20 items-center">
        <ul className="flex gap-6 font-secondary items-center ">
          <li>
            <a href="#about_me">About me</a>{" "}
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="links flex items-center gap-6">
          <a href={linkGitHub} target="_blank">
            <i class="fa-brands fa-github scale-150 "></i>
          </a>
          <a href={linkLinkedin} className="ml-1">
            <i class="fa-brands fa-linkedin scale-150"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
