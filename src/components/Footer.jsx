import React from "react";
import NotifMailCopied from "./NotifMailCopied";
import ContactUs from "./ContactUs";

export default function Footer({ linkGitHub, linkLinkedin }) {
  const currentYear = new Date().getFullYear();

  function copy() {
    var copyText = document.getElementById("myEmail");
    var notifMail = document.getElementById("notifCopied");
    navigator.clipboard.writeText(copyText.textContent);
    notifMail.style.display = "block";
    setTimeout(() => {
      notifMail.style.display = "none";
    }, 3500);
  }

  return (
    <>
      <NotifMailCopied />
      <footer
        id="contact"
        className="px-[3rem] bg-mainColor bg-opacity-20 py-[10rem] relative mt-[8rem] flex flex-col gap-8 items-center md:px-24"
      >
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
          <span className=""> My mail: </span>
          <span
            id="myEmail"
            className=" font-bold text-mainColor cursor-pointer underline underline-offset-4 ml-2"
            onClick={() => copy()}
          >
            niamorpro@proton.me
          </span>
        </span>
        <div className="social_networks flex gap-4 items-center  lg:hidden">
          <span>Find me here: </span>

          <a href={linkGitHub} target="_blank">
            <i class="fa-brands fa-github scale-150 "></i>
          </a>
          <a href={linkLinkedin} target="_blank">
            <i class="fa-brands fa-linkedin scale-150"></i>
          </a>
        </div>
        <span className="text-sm text-center">
          Copyright &copy; {currentYear} Niamor. All rights reserved.
        </span>
      </footer>
    </>
  );
}
