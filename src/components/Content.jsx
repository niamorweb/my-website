import React, { useEffect, useState } from "react";
import DataProjects from "../data/DataProjects.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";

import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";

export default function Content() {
  gsap.registerPlugin(ScrollTrigger);

  const [dataProjects, setDataProjects] = useState([]);

  const settingsProjects = {
    dots: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    margin: 200,
    gap: 50,
    padding: 30,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          margin: 200,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const settingsStack = {
    dots: false,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    margin: 200,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          margin: 50,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          margin: 50,
        },
      },
    ],
  };

  const myLanguages = [
    {
      language: "HTML",
      img: "/my-website/assets/images/languages/html5.svg",
    },
    {
      language: "CSS",
      img: "/my-website/assets/images/languages/css.svg",
    },
    {
      language: "SASS",
      img: "/my-website/assets/images/languages/sass.svg",
    },
    {
      language: "JAVASCRIPT",
      img: "/my-website/assets/images/languages/js.svg",
    },
    {
      language: "REACT JS",
      img: "/my-website/assets/images/languages/reactjs.svg",
    },
    {
      language: "TAILWIND CSS",
      img: "/my-website/assets/images/languages/tailwind.svg",
    },
    {
      language: "Git",
      img: "/my-website/assets/images/languages/git.svg",
    },
    {
      language: "Figma",
      img: "/my-website/assets/images/languages/figma.svg",
    },
    {
      language: "Jquery",
      img: "/my-website/assets/images/languages/jquery.svg",
    },
  ];
  useEffect(() => {
    setDataProjects(DataProjects);
  });

  useEffect(() => {
    const circle1 = document.querySelector(".circle1");
    const circle2 = document.querySelector(".circle2");
    const circle3 = document.querySelector(".circle3");

    const line_mobile_about = document.querySelector(".line_mobile_about");
    const line_mobile_languages = document.querySelector(
      ".line_mobile_languages"
    );
    const line_mobile_projects = document.querySelector(
      ".line_mobile_projects"
    );

    gsap.fromTo(
      line_mobile_projects,
      {
        width: 0,
      },
      {
        delay: 0.5,
        width: 200,
        duration: 1.3,
        scrollTrigger: {
          trigger: circle3,
          start: "50% 80%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      line_mobile_about,
      {
        width: 0,
      },
      {
        delay: 0.5,
        width: 200,
        duration: 1.3,
        scrollTrigger: {
          trigger: circle1,
          start: "50% 80%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      line_mobile_languages,
      {
        width: 0,
      },
      {
        delay: 0.5,
        width: 200,
        duration: 1.3,
        scrollTrigger: {
          trigger: circle2,
          start: "50% 80%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <main className="pt-[75px] flex flex-col  gap-[5rem] md:w-[80%] m-auto max-w-[80rem] mt-5 ">
      <section
        id="about_me"
        className="about_me py-[5rem] relative md:h-[400px] px-8"
      >
        <div className="circle1 hidden"></div>
        <div className="sub_container_about relative flex flex-col gap-5 md:flex-row-reverse md:gap-14 items-center md:justify-between md:items-start  mx-auto ">
          <div className="line_mobile_about  absolute h-[5px] left-0 -top-5 bg-mainColor "></div>
          <div className="box_content_text flex flex-col gap-6">
            {" "}
            <h2 className="font-secondary">About Me.</h2>
            <p className="xl:text-xl">
              Hi, I am a 20 year old web developer from France specializing on
              front-end development. With over a year of experience in web
              development, it allowed me to gain a solid knowledge in
              development.
              <br /> I taught myself web development by constantly learning and
              staying up-to-date with the latest technologies and trends in the
              web world. I am passionate about web development and love solving
              problems and creating things that have an impact on users.
            </p>
            <p className="xl:text-xl">Let's build cool things!</p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="my_languages relative py-[5rem] md:mb-0 md:pb-32"
      >
        <div className="circle2 hidden"></div>
        <div className="sub_container_languages relative flex flex-col ">
          <h2 className="px-8 font-secondary relative">
            <div className="line_mobile_languages absolute h-[5px] -top-5 bg-mainColor "></div>
            My skills
          </h2>
          <div className=" px-8 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row  gap-10 items-center mb-20 mt-10">
              <div className="box w-full md:w-1/3 flex justify-center flex-col p-4 items-center lg:gap-3 lg:py-8   ">
                <div className="container-img w-10 lg:w-16 h-16 flex justify-center items-center">
                  <img
                    className="w-full  "
                    src="/my-website/assets/icons/icon-integration.svg"
                    alt=""
                  />
                </div>
                <span className=" font-medium text-xl  text-center">
                  Mockups integration
                </span>
              </div>
              <div className="box w-full md:w-1/3 flex justify-center flex-col p-4 items-center lg:gap-3 lg:py-8">
                <div className="container-img w-10 lg:w-16 h-16 flex justify-center items-center">
                  <img
                    className="w-full  "
                    src="/my-website/assets/icons/icon-responsive2.svg"
                    alt=""
                  />
                </div>
                <span className=" font-medium text-xl text-center">
                  Responsive pages
                </span>
              </div>
              <div className="box w-full md:w-1/3 flex justify-center flex-col p-4 rounded-xl items-center lg:gap-3 lg:py-8 ">
                <div className="container-img justify-center w-10 lg:w-16 h-16 flex items-center">
                  <img
                    className="w-full"
                    src="/my-website/assets/icons/icon-animation.svg"
                    alt=""
                  />
                </div>
                <span className=" font-medium text-xl text-center">
                  Animations & Sliders
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="px-8 box_text flex flex-col gap-1">
              {" "}
              <span className="font-semibold  text-2xl">
                With my current knowledge
              </span>
            </div>
            <Slider
              className="container_languages gap-4 flex flex-wrap justify-center "
              {...settingsStack}
            >
              {" "}
              {myLanguages.map((x) => {
                return (
                  <>
                    <div className="box_languages  justify-center flex flex-col gap-[1rem] p-[10px] text-center items-center ">
                      <img className="w-[9rem]" src={x.img} alt="" />
                      <p className="uppercase">{x.language}</p>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      <section id="works" className="my_projects px-8  relative py-[5rem]">
        <div className="circle3 hidden "></div>
        <div className="sub_container_projects relative  flex gap-[3rem] m-auto flex-col ">
          <div className="my_projects_box_text lg:sticky lg:top-[10%] flex flex-col items-start gap-[1rem] h-fit ">
            <div className="line_mobile_projects absolute h-[5px] -top-5 bg-mainColor "></div>
            <h2 className="font-secondary relative">Some Things I’ve Built.</h2>
            <p>
              I believe the best way to learn is by building, even if it means
              getting stuck and having to figure things out on my own. That's
              why I enjoy web development, I discover new things every days.
            </p>
          </div>

          <Slider
            className="all_projects_mobile flex relative lg:hidden flex-col gap-[20px]  "
            {...settingsProjects}
          >
            {dataProjects.map((project) => {
              return (
                <div className="px-6 ">
                  <div className="container_project gap-6 shadow-md w-full">
                    <img
                      className="h-[16rem] w-full object-cover "
                      src={project.img}
                      alt=""
                    />
                    <div className="description flex flex-col gap-[2rem] py-[1rem] md:p-[1rem] px-3 ">
                      <div className="flex justify-between items-center">
                        <span className="text-[1.3rem] font-secondary ">
                          {project.name}
                        </span>
                      </div>
                      <div className="">
                        <p>{project.description}</p>
                      </div>
                      <div className="tags_links_project flex gap-8 ">
                        <div className="open_project_and_code flex items-center gap-4">
                          <a
                            className="h-6 w-6 duration-300 lg:h-10 lg:w-10 flex justify-center items-center text-xl"
                            href={project.link}
                            target="_blank"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </a>
                          <a
                            className="h-6 w-6 duration-300  lg:h-10 lg:w-10 flex justify-center items-center text-xl"
                            href={project.codeSource}
                            target="_blank"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                        </div>
                        <div className="tags flex gap-[.5rem] font-secondary justify-self-end flex-wrap  ">
                          {project.tags.map((tag) => (
                            <p className="uppercase">{tag}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </main>
  );
}
