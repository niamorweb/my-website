import gsap from "gsap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const [showScroll, setShowScroll] = useState(false);

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

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="intro min-h-[100vh] text-center justify-center gap-14  md:pl-8  md:mb-20  flex flex-col w-[85%] m-auto items-center ">
      <div className="intro-illustration"></div>
      <div
        className="scroll-top"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        <div className="arrow-up"></div>
      </div>

      <h1 className="font-secondary uppercase relative main-title ">
        Hi, I'm Niamor
      </h1>

      <h2 className="text-lg md:text-4xl font-medium ">
        <Typewriter
          options={{
            strings: [
              "",
              "A Web Developer",
              "Let's work together",
              "I Love Coding",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <a
        href="#content"
        className=" bg-white px-5 py-2 rounded-md text-xl font-secondary uppercase font-normal  duration-150 hover:bg-mainColor hover:text-white "
      >
        Who am I ?
      </a>
    </section>
  );
}
