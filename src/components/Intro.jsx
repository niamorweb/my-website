import gsap from "gsap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const [showScroll, setShowScroll] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [divPosition, setDivPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.pageX, y: event.pageY });
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const speed = 0.2;
    const x = divPosition.x + (mousePosition.x - divPosition.x) * speed;
    const y = divPosition.y + (mousePosition.y - divPosition.y) * speed;
    setDivPosition({ x, y });
  }, [mousePosition]);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="intro overflow-hidden bg-[#f0f2ff] relative min-h-[100vh] text-center justify-center gap-14 px-3 lg:px-7  md:mb-20  flex flex-col  m-auto">
      <div
        className="scroll-top"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        <div className="arrow-up"></div>
      </div>

      <div
        style={{ left: divPosition.x + "px", top: divPosition.y + "px" }}
        className="intro_circle_illutration ici1"
      ></div>
      <div className="intro_circle_illutration ici1"></div>
      <div className="intro_circle_illutration ici2"></div>
      <div className="intro_circle_illutration ici3"></div>
      {/* 0281f8 */}
      <div className="flex flex-col gap-20">
        <div className="relative w-4/6 mx-auto ">
          <h1 className="font-secondary relative main-title text-center leading-[1.1]">
            Hey ! I'm <span className="text-[#0281f8] ">Niamor</span>, a web
            developer specialized in the Front-End passionate by coding
          </h1>
        </div>

        {/* <h2 className="text-lg md:text-3xl mx-auto font-secondary font-medium flex gap-1 md:gap-2 ">
          Need
          <Typewriter
            options={{
              strings: [
                "someone for building a portfolio ?",
                "a front end developer in your team ?",
                "a developer to start your project ?",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2> */}
      </div>
      {/* <div className="flex gap-5 items-center mt-10">
        <a
          href="#about_me"
          className=" bg-white px-5 py-3 md:px-7 md:py-5 hover:shadow-xl rounded-md text-base md:text-xl font-secondary uppercase font-normal  duration-150 "
        >
          Learn more about me
        </a>
        <a
          href="#contact"
          className="px-5 py-3 md:px-7 md:py-5 rounded-md text-base md:text-xl font-secondary uppercase font-normal  duration-150 bg-mainColor text-white hover:shadow-xl "
        >
          Contact me
        </a>
      </div> */}
    </section>
  );
}
