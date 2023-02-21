import React from "react";

export default function Header({ linkMail, linkTwitter, linkGitHub }) {
  return (
    <>
      <header className="bg-transparent absolute left-0 right-0 top-0 flex items-center justify-between gap-8 px-6 py-4 lg:hidden">
        <h2 className="brand_logo text-lg font-secondary leading-[35px] font-secondary ">
          NIAMOR WEB
        </h2>
        <div className="links flex items-center gap-4">
          <a href={linkTwitter} target="_blank">
            <svg
              className="twitter duration-200 hover:scale-[1.3]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
            >
              <path
                className="fill-secondaryColor duration-100 transition-all ease-in-out"
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              />
            </svg>
          </a>
          <a href={linkGitHub} target="_blank">
            <svg
              className="github duration-200 hover:scale-[1.3]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              {" "}
              <path
                className="fill-secondaryColor duration-100 transition-all ease-in-out"
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              />
            </svg>
          </a>
          <a href={linkMail} className="ml-1">
            <svg
              className=" scale-125 duration-100 hover:scale-150  "
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
          </a>
        </div>
      </header>
      <aside className="hidden nav_aside z-20 fixed left-0 top-0 bottom-0  w-24 flex-col justify-between items-center lg:flex">
        <h2 className="brand_logo text-tb-rl text-xl rotate-180 mt-8  font-secondary">
          NIAMOR WEB
        </h2>
        <div className="links flex flex-col items-center gap-4">
          <a href={linkTwitter} target="_blank">
            <svg
              className="twitter duration-200 hover:scale-[1.3]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
            >
              <path
                className="fill-secondaryColor duration-100 transition-all ease-in-out"
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              />
            </svg>
          </a>
          <a href={linkGitHub} target="_blank">
            <svg
              className="github duration-200 hover:scale-[1.3]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              {" "}
              <path
                className="fill-secondaryColor duration-100 transition-all ease-in-out"
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
              />
            </svg>
          </a>
          <a href={linkMail} className="mt-1">
            <svg
              className=" scale-125 duration-100 hover:scale-150  "
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
          </a>
          <div className="line w-[.2rem] h-24 bg-secondaryColor mt-6"></div>
        </div>
      </aside>
    </>
  );
}
