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

  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    margin: 200,
    arrows: false,
  };

  const myLanguages = [
    {
      language: "HTML",
      img: "../../../my-website/assets/images/languages/html5.svg",
    },
    {
      language: "CSS",
      img: "../../../my-website/assets/images/languages/css.png",
    },
    {
      language: "SASS",
      img: "../../../my-website/assets/images/languages/sass.svg",
    },
    {
      language: "JAVASCRIPT",
      img: "../../../my-website/assets/images/languages/js.svg",
    },
    {
      language: "REACT JS",
      img: "../../../my-website/assets/images/languages/react.svg",
    },
    {
      language: "TAILWIND CSS",
      img: "../../../my-website/assets/images/languages/tailwind-css.svg",
    },
    {
      language: "Git",
      img: "../../../my-website/assets/images/languages/git.svg",
    },
  ];
  useEffect(() => {
    setDataProjects(DataProjects);
  });

  useEffect(() => {
    const circle1 = document.querySelector(".circle1");
    const circle2 = document.querySelector(".circle2");
    const circle3 = document.querySelector(".circle3");
    const lineCheckpoints = document.querySelector(".line_checkpoints");

    const sub_container_about = document.querySelector(".sub_container_about");
    const sub_container_languages = document.querySelector(
      ".sub_container_languages"
    );
    const sub_container_projects = document.querySelector(
      ".sub_container_projects"
    );

    const line_mobile_about = document.querySelector(".line_mobile_about");
    const line_mobile_languages = document.querySelector(
      ".line_mobile_languages"
    );
    const line_mobile_projects = document.querySelector(
      ".line_mobile_projects"
    );

    // Set up the animation
    gsap.to(lineCheckpoints, {
      height: "calc(400px + 10rem)",
      scrollTrigger: {
        trigger: circle1,
        start: "50% 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(lineCheckpoints, {
      height: "calc(100% + 10rem)",
      scrollTrigger: {
        trigger: circle2,
        start: "50% 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(circle1, {
      backgroundColor: "#8c9cff",
      scrollTrigger: {
        trigger: circle1,
        start: "50% 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(circle2, {
      backgroundColor: "#8c9cff",
      scrollTrigger: {
        trigger: circle2,
        start: "50% 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(circle3, {
      backgroundColor: "#8c9cff",
      scrollTrigger: {
        trigger: circle3,
        start: "50% 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    gsap.fromTo(
      sub_container_projects,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: circle3,
          start: "50% 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      sub_container_about,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: circle1,
          start: "50% 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      sub_container_languages,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: circle2,
          start: "50% 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      line_mobile_projects,
      {
        width: 0,
      },
      {
        delay: 1.5,
        width: 200,
        duration: 1.3,
        scrollTrigger: {
          trigger: circle3,
          start: "50% 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      line_mobile_about,
      {
        width: 0,
      },
      {
        delay: 1.5,
        width: 200,
        duration: 1.3,
        scrollTrigger: {
          trigger: circle1,
          start: "50% 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      line_mobile_languages,
      {
        width: 0,
      },
      {
        delay: 1.5,
        width: 200,
        duration: 1.3,
        scrollTrigger: {
          trigger: circle2,
          start: "50% 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <main
      id="about_me"
      className="pt-[75px] flex flex-col  gap-[10rem] w-[85%] md:w-[80%] m-auto max-w-[80rem] mt-5 "
    >
      <div className="area_checkpoints flex flex-col gap-[10rem]">
        <div className="line_checkpoints hidden md:block"></div>
        <section className="about_me relative md:h-[400px]">
          <div className="line_mobile_about md:hidden absolute h-[5px] top-[-10px] bg-mainColor "></div>
          <div className="circle1 hidden md:block"></div>
          <div className="sub_container_about flex flex-col gap-5 md:flex-row-reverse md:gap-14 items-center md:justify-between md:items-start  mx-auto md:pl-20">
            <div className="box_content_text flex flex-col gap-6">
              {" "}
              <h2 className="font-secondary">About Me.</h2>
              <p className="xl:text-xl">
                Hi, I am a 20 year old web developer from France specializing on
                front-end development. With over a year of experience in web
                development, it allowed me to gain a solid knowledge in
                development.
                <br /> I taught myself web development by constantly learning
                and staying up-to-date with the latest technologies and trends
                in the web world. I am passionate about web development and love
                solving problems and creating things that have an impact on
                users.
              </p>
              <p className="xl:text-xl">Let's build cool things!</p>
            </div>
          </div>
        </section>

        <section className="my_languages relative mb-20 md:mb-0 md:pb-32">
          <div className="line_mobile_languages md:hidden absolute h-[5px] top-[-10px] bg-mainColor "></div>
          <div className="circle2 hidden md:block"></div>
          <div className="sub_container_languages flex flex-col gap-20 md:pl-20">
            <h2 className="font-secondary">Experience</h2>
            <div className=" flex flex-col gap-4">
              <div className="box_text flex flex-col gap-2">
                <span className="font-semibold  text-2xl ">My skills</span>
                <p>1+ years of experience</p>
              </div>
              <div className="flex flex-col md:flex-row  gap-10 items-center">
                <div className="box w-full md:w-1/3 flex justify-center md:flex-col p-4 rounded-xl items-center gap-3  shadow-md lg:py-8   ">
                  <div className="container-img w-10 lg:w-16 h-16 flex justify-center items-center">
                    <img
                      className="w-full  "
                      src="/my-website/assets/icons/icon-integration.svg"
                      alt=""
                    />
                  </div>
                  <span className=" font-medium text-xl  text-center font-third">
                    Integration design
                  </span>
                </div>
                <div className="box w-full md:w-1/3 flex justify-center md:flex-col p-4 rounded-xl items-center gap-3  shadow-md lg:py-8">
                  <div className="container-img w-10 lg:w-16 h-16 flex justify-center items-center">
                    <img
                      className="w-full  "
                      src="/my-website/assets/icons/icon-responsive2.svg"
                      alt=""
                    />
                  </div>
                  <span className=" font-medium text-xl text-center font-third">
                    Responsive pages
                  </span>
                </div>
                <div className="box w-full md:w-1/3 flex justify-center md:flex-col  p-4 rounded-xl items-center gap-3 shadow-md  lg:py-8 ">
                  <div className="container-img justify-center w-10 lg:w-16 h-16 flex items-center">
                    <img
                      className="w-full"
                      src="/my-website/assets/icons/icon-animation.svg"
                      alt=""
                    />
                  </div>
                  <span className=" font-medium text-xl text-center font-third">
                    Animations & Sliders
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="box_text flex flex-col gap-1">
                {" "}
                <span className="font-semibold  text-2xl">My knowledges</span>
              </div>
              <div className="container_languages gap-4 flex flex-wrap justify-center ">
                {" "}
                {myLanguages.map((x) => {
                  return (
                    <div className="box_languages border-2 rounded-md shadow-md justify-center flex gap-[1.5rem] flex-wrap  grow shrink p-[10px] text-center items-center ">
                      <img className="h-[2rem]" src={x.img} alt="" />
                      <p className="uppercase">{x.language}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="my_projects relative">
        <div className="line_mobile_projects md:hidden absolute h-[5px] top-[-10px] bg-mainColor "></div>
        <div className="circle3 hidden md:block"></div>
        <div className="sub_container_projects relative  flex gap-[3rem] m-auto md:pl-20 flex-col lg:flex-row">
          <div className="my_projects_box_text lg:sticky lg:top-[40%] flex flex-col gap-[1rem] lg:w-2/4 h-fit ">
            <h2 className="font-secondary">Some Things I’ve Built.</h2>
            <p>
              I believe the best way to learn is by building, even if it means
              getting stuck and having to figure things out on my own. That's
              why I enjoy web development, I discover new things every days.
            </p>
          </div>

          <Slider
            className="all_projects flex relative lg:hidden flex-col gap-[20px]  lg:w-2/4"
            {...settings}
          >
            {dataProjects.map((project) => {
              return (
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
                      {project.important ? (
                        <span className="uppercase text-sm xl:text-lg font-secondary text-mainColor">
                          important project
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="">
                      <p>{project.description}</p>
                    </div>
                    <div className="tags_links_project flex gap-8 ">
                      <div className="open_project_and_code flex items-center gap-4">
                        <a
                          className="h-6 w-6 duration-300 hover:scale-125 lg:h-10 lg:w-10"
                          href={project.link}
                          target="_blank"
                        >
                          <img
                            className="w-full h-full"
                            src="../my-website/assets/icons/icon-new-tab-color.svg"
                            alt=""
                          />
                        </a>
                        <a
                          className="h-6 w-6 duration-300 hover:scale-125 lg:h-10 lg:w-10"
                          href={project.codeSource}
                          target="_blank"
                        >
                          <img
                            className="w-full h-full"
                            src="../my-website/assets/icons/icon-github-color.svg"
                            alt=""
                          />
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
              );
            })}
          </Slider>

          <div className="all_projects hidden relative lg:flex flex-col gap-[40px]  lg:w-2/4">
            {dataProjects.map((project) => {
              return (
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
                      {project.important ? (
                        <span className="uppercase text-sm xl:text-lg font-secondary text-mainColor">
                          important project
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="">
                      <p>{project.description}</p>
                    </div>
                    <div className="tags_links_project flex gap-8 ">
                      <div className="open_project_and_code flex items-center gap-4">
                        <a
                          className="h-6 w-6 duration-300 hover:scale-125"
                          href={project.link}
                          target="_blank"
                        >
                          <img
                            src="../my-website/assets/icons/icon-new-tab-color.svg"
                            alt=""
                          />
                        </a>
                        <a
                          className="h-6 w-6 duration-300 hover:scale-125"
                          href={project.codeSource}
                          target="_blank"
                        >
                          <img
                            src="../my-website/assets/icons/icon-github-color.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="tags flex gap-[.5rem] justify-self-end flex-wrap  font-secondary  ">
                        {project.tags.map((tag) => (
                          <p className="uppercase">{tag}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
}
