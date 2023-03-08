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
          <i className="fa-solid fa-envelope text-xl"></i>
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
            <i className="fa-brands fa-github scale-150 "></i>
          </a>
          <a href={linkLinkedin} target="_blank">
            <i className="fa-brands fa-linkedin scale-150"></i>
          </a>
        </div>
        <span className="text-sm text-center">
          Copyright &copy; {currentYear} Niamor. All rights reserved.
        </span>
      </footer>
    </>
  );
}
