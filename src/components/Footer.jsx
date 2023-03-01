import React from "react";
import NotifMailCopied from "./NotifMailCopied";
import ContactUs from "./ContactUs";

export default function Footer({ linkGitHub }) {
  function copy() {
    var copyText = document.getElementById("myEmail");
    var notifMail = document.getElementById("notifCopied");
    navigator.clipboard.writeText(copyText.textContent);
    notifMail.style.opacity = "1";
    setTimeout(() => {
      notifMail.style.opacity = "0";
    }, 3500);
  }

  return (
    <>
      <NotifMailCopied />
      <footer
        id="contact"
        className="px-[3rem] py-[3rem] relative mt-[8rem] flex flex-col gap-8 items-center md:px-24"
      >
        <div className="footer-bg"></div>
        <ContactUs />
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 4 7.89 5.26a2 2 0 0 0 2.22 0L19 4M3 15h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
            />
          </svg>
          <span className=" hidden md:block"> My mail: </span>
          <span className="  md:hidden"> My mail: </span>
          <span
            id="myEmail"
            className=" font-bold text-mainColor cursor-pointer underline underline-offset-4 ml-2"
            onClick={() => copy()}
          >
            niamorpro@proton.me
          </span>
        </span>
        <span className="text-center">
          Created by{" "}
          <span className="font-bold text-mainColor ">NiamorWeb </span> using
          React and Tailwind CSS
        </span>
        <div className="social_networks flex gap-4 items-center  lg:hidden">
          <span>Find me here: </span>

          <a href={linkGitHub} target="_blank">
            <svg
              className="github scale-75 hover:scale-110 	duration-300	"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              {" "}
              <path
                className="fill-mainColor duration-100 "
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
