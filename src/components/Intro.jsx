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
      <div
        className="scroll-top"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        <div className="arrow-up"></div>
      </div>
      <h1 className="font-secondary">FRONT-END DEVELOPER</h1>

      <h2 className="text-mainColor text-lg md:text-4xl ">
        <Typewriter
          options={{
            strings: [
              "Hi, I'm Niamor",
              "A Web Developer",
              "Let's work together",
              "I Love Coding",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </section>
  );
}
