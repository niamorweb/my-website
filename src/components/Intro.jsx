import gsap from "gsap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Intro({ linkLinkedin, linkGitHub }) {
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
    <section className="intro overflow-hidden bg-[#f0f2ff] relative min-h-[100vh] text-center justify-center gap-14 px-7  md:mb-20  flex flex-col  m-auto">
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
        <div className="relative md:w-4/6 mx-auto ">
          <h1 className="font-secondary relative main-title text-center leading-[1.1]">
            Hey ! I'm <span className="text-[#0281f8] ">Niamor</span>, a web
            developer specialized in the Front-End passionate by coding
          </h1>
          <div className="links md:hidden mt-8 justify-center flex items-center gap-8 text-xl ">
            <a href={linkGitHub} target="_blank">
              <i className="fa-brands fa-github scale-150 "></i>
            </a>
            <a href={linkLinkedin} target="_blank">
              <i className="fa-brands fa-linkedin scale-150"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
