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

  useEffect(() => {
    const markTitleBig = document.querySelector(".mark_title_big_screen");
    const markTitleSmall1 = document.querySelector(".mark_title_small_screen1");
    const markTitleSmall2 = document.querySelector(".mark_title_small_screen2");

    gsap.to(markTitleBig, {
      duration: 0.6,
      rotation: 178,
      scale: 1,
      delay: 1,
      ease: "power2.out",
    });

    gsap.to(markTitleSmall1, {
      duration: 0.6,
      rotation: 178,
      scale: 1,
      delay: 1,
      ease: "power2.out",
    });

    gsap.to(markTitleSmall2, {
      duration: 1,
      rotation: 178,
      scale: 1,
      delay: 1,
      ease: "power2.out",
    });
  });

  return (
    <section className="intro min-h-[100vh] text-center justify-center gap-14  md:pl-8  md:mb-20  flex flex-col w-[85%] m-auto items-center ">
      <div
        className="scroll-top"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        <div className="arrow-up"></div>
      </div>
      <div>
        {" "}
        <h1 className="font-secondary block md:hidden main-title relative ">
          <div className="mark_title_small_screen1 absolute w-full h-[16px] bottom-[12px] scale-0 bg-mainColor rotate-[-2deg] mix-blend-multiply"></div>
          FRONT-END
        </h1>
        <h1 className="font-secondary block md:hidden main-title relative">
          <div className="mark_title_small_screen2 absolute w-full h-[16px] bottom-[12px] scale-0 bg-mainColor rotate-[-2deg] mix-blend-multiply"></div>
          DEVELOPER
        </h1>
      </div>
      <h1 className="font-secondary relative hidden md:block main-title ">
        FRONT-END DEVELOPER
        <div className="mark_title_big_screen absolute w-full h-[26px] bottom-[12px] scale-0 bg-mainColor rotate-[-2deg] mix-blend-multiply"></div>
      </h1>

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
