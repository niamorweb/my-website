import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DataProjects from "./data/DataProjects.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [dataProjects, setDataProjects] = useState([]);

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
  ];

  function copy() {
    var copyText = document.getElementById("myEmail");
    var notifMail = document.getElementById("notifCopied");
    navigator.clipboard.writeText(copyText.textContent);
    notifMail.style.opacity = "1";
    setTimeout(() => {
      notifMail.style.opacity = "0";
    }, 3500);
  }

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
      backgroundColor: "#fff",
      scrollTrigger: {
        trigger: circle1,
        start: "50% 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(circle2, {
      backgroundColor: "#fff",
      scrollTrigger: {
        trigger: circle2,
        start: "50% 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(circle3, {
      backgroundColor: "#fff",
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
        translateY: 1000,
      },
      {
        translateY: 0,
        duration: 1.3,
        scrollTrigger: {
          trigger: circle3, // use the box_text element as the trigger
          start: "50% 80%", // start the animation when the element is at the top of the viewport
          end: "bottom bottom", // end the animation when the element is at the bottom of the viewport
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      sub_container_about,
      {
        translateY: 1000,
      },
      {
        translateY: 0,
        duration: 1.3,
        scrollTrigger: {
          trigger: circle1, // use the box_text element as the trigger
          start: "50% 80%", // start the animation when the element is at the top of the viewport
          end: "bottom bottom", // end the animation when the element is at the bottom of the viewport
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      sub_container_languages,
      {
        translateY: 1000,
      },
      {
        translateY: 0,
        duration: 1.3,
        scrollTrigger: {
          trigger: circle2, // use the box_text element as the trigger
          start: "50% 80%", // start the animation when the element is at the top of the viewport
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div className="App">
      <aside className="hidden nav_aside fixed left-0 top-0 bottom-0  w-24 flex flex-col justify-between items-center lg:flex">
        <h2 className="brand_logo text-white text-tb-rl text-xl rotate-180 mt-8 ">
          NIAMOR WEB
        </h2>
        <div className="links flex flex-col items-center gap-4">
          <a href="">
            <svg
              className="twitter duration-200 hover:scale-[1.3]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
            >
              <path
                className="fill-white duration-100 transition-all ease-in-out"
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              />
            </svg>
          </a>
          <a href="">
            <svg
              className="github duration-200 hover:scale-[1.3]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              {" "}
              <path
                className="fill-white duration-100 transition-all ease-in-out"
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              />
            </svg>
          </a>
          <a href="">
            <img
              className="hover:scale-[1.3] duration-300"
              src="../../my-website/assets/icons/icon-mail-white.png"
              alt=""
            />
          </a>
          <div className="line w-[.2rem] h-24 bg-white mt-6"></div>
        </div>
      </aside>
      <video
        className="fixed z-[-1] w-[100vw] h-[100vh] object-cover "
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src="../my-website/assets/videos/bg2.mp4" type="video/mp4" />
      </video>
      <span
        style={{ opacity: "0" }}
        id="notifCopied"
        className="fixed bg-mainColorLight text-black top-6 right-6 px-6 py-4 font-medium	z-[100] "
      >
        Address email copied !
      </span>

      <section className="intro min-h-[100vh] text-center justify-center gap-14  md:pl-8 w-full  mb-32  flex flex-col w-[85%] m-auto items-center ">
        <h1>FRONT-END DEVELOPER</h1>
        <h2 id="typewriterText" className="text-mainColor">
          Make your projects a reality.
        </h2>
      </section>
      <main className="flex flex-col gap-[10rem] w-[90%] md:w-[80%] m-auto max-w-[80rem] ">
        <div className="area_checkpoints flex flex-col gap-[10rem]">
          <div className="line_checkpoints"></div>
          <section className="about_me  h-[400px]">
            <div className="circle1"></div>
            <div className="sub_container_about  pl-8 flex flex-col gap-5 md:flex-row-reverse md:gap-14 items-center md:justify-between md:items-start  mx-auto  md:pl-20">
              <div className="box_content_text flex flex-col gap-6">
                {" "}
                <h2>About Me.</h2>
                <p>
                  Hi, I am a 20-year-old web developer from France specializing
                  on front-end development. With over a year of experience in
                  web development, it allowed me to gain a solid knowledge in
                  development.
                  <br /> I taught myself web development by constantly learning
                  and staying up-to-date with the latest technologies and trends
                  in the web world. I am passionate about web development and
                  love solving problems and creating things that have an impact
                  on users.
                </p>
                <p>Let's build cool things!</p>
              </div>
            </div>
          </section>

          <section className="my_languages h-[400px] ">
            <div className="circle2"></div>
            <div className="sub_container_languages flex flex-col gap-[3rem] pl-8 lg:flex-row  md:pl-20">
              <div className="box_text flex flex-col gap-[1rem]">
                <h2>My current stack</h2>
                <p>1+ year of experience</p>
              </div>
              <div className="container_languages gap-4 flex flex-wrap justify-center ">
                {" "}
                {myLanguages.map((x) => {
                  return (
                    <div className="box_languages bg-box shadow-md justify-center flex gap-[1.5rem] flex-wrap  grow shrink p-[10px] text-center items-center">
                      <img className="h-[2rem]" src={x.img} alt="" />
                      <p>{x.language}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <section className="my_projects">
          <div className="circle3"></div>
          <div className="sub_container_projects  flex flex-col gap-[3rem] overflow-hidden pl-8 m-auto md:pl-20 overflow-hidden">
            <div className="my_projects_box_text flex flex-col gap-[1rem] ">
              <h2>Some Things I’ve Built.</h2>
              <p>
                I believe the best way to learn is by building, even if it means
                getting stuck and having to figure things out on my own. That's
                why I enjoy web development, I discover new things every day.
              </p>
            </div>

            <div className="all_projects grid gap-12 gap-[2rem] md:gap-[4rem] pb-6 ">
              {dataProjects.map((project) => {
                return (
                  <div className="container_project gap-6 shadow-md w-full lg:flex	">
                    <img
                      className="h-[16rem] w-full object-cover lg:w-[50%]"
                      src={project.img}
                      alt=""
                    />
                    <div className="description flex flex-col gap-[2rem] p-[1rem]">
                      <span className="subtitle text-[1.3rem] ">
                        {project.name}
                      </span>

                      <div className="">
                        <p>{project.description}</p>
                      </div>
                      <div className="tags_links_project flex gap-8 ">
                        <div className="open_project_and_code flex items-center gap-4">
                          <a
                            className="h-6 w-6"
                            href={project.link}
                            target="_blank"
                          >
                            <img
                              src="../my-website/assets/icons/icon-new-tab.svg"
                              alt=""
                            />
                          </a>
                          <a
                            className="h-6 w-6"
                            href={project.codeSource}
                            target="_blank"
                          >
                            <img src="../my-website/assets/icons/icon-github.svg" alt="" />
                          </a>
                        </div>
                        <div className="tags flex gap-[.5rem] justify-self-end">
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
        </section>
      </main>

      <footer className="px-[3rem] py-[3rem] mt-[8rem] flex flex-col gap-8 items-center lg:flex-row lg:justify-between md:px-24">
        <span className="flex ">
          <img
            className="mr-4 hidden md:block"
            src="../../my-website/assets/icons/icon-mail-white.png"
            alt=""
          />
          <span className=" hidden md:block"> Contact me by mail: </span>
          <span className="  md:hidden"> My mail: </span>
          <span
            id="myEmail"
            className="subtitle cursor-pointer ml-2"
            onClick={() => copy()}
          >
            niamorweb@skiff.com
          </span>
        </span>

        <span className="text-center">
          Created by <span className="subtitle ">NiamorWeb </span> using React
          and Tailwind CSS
        </span>
        <div className="social_networks flex gap-4 items-center  lg:hidden">
          <span>Find me here: </span>
          <a href="">
            <svg
              className="twitter scale-75 hover:scale-[1.1rem]	duration-300"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
            >
              <path
                className="fill-white duration-100 hover:fill-white transition-all ease-in-out"
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              />
            </svg>
          </a>
          <a href="">
            <svg
              className="github scale-75 hover:scale-[1.1rem]	duration-300	"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              {" "}
              <path
                className="fill-white duration-100 hover:fill-white transition-all ease-in-out"
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
