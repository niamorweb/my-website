import React, { useEffect, useRef, useState } from "react";

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
        className="md:hidden cursor-pointer h-8 w-8 p-2 rounded-full flex justify-center items-center text-[23px]"
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
        <ul className="flex gap-4 flex-col font-secondary items-left text-xl ">
          <li onClick={() => handleMenuMobile()}>
            <a href="#about_me">About me</a>{" "}
          </li>
          <li onClick={() => handleMenuMobile()}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => handleMenuMobile()}>
            <a href="#works">Works</a>
          </li>
          <li onClick={() => handleMenuMobile()}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="links flex items-center gap-8 text-xl ">
          <a href={linkGitHub} target="_blank">
            <i class="fa-brands fa-github scale-150 "></i>
          </a>
          <a href={linkLinkedin} target="_blank">
            <i class="fa-brands fa-linkedin scale-150"></i>
          </a>
        </div>
      </div>
      <div className="hidden md:flex gap-20 items-center">
        <ul className=" flex gap-6 font-secondary items-center  ">
          <li className="link_large_screen">
            <a href="#about_me">About me</a>{" "}
          </li>
          <li className="link_large_screen">
            <a href="#skills">Skills</a>
          </li>
          <li className="link_large_screen">
            <a href="#works">Works</a>
          </li>
          <li className="link_large_screen">
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
