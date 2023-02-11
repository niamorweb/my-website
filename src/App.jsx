import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  //LINKS
  var linkMail = "mailto:niamorweb@proton.me";
  var linkTwitter = "https://twitter.com/niamor_web";
  var linkGitHub = "https://github.com/niamorweb";

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

  return (
    <div className="App">
      <Header
        linkMail={linkMail}
        linkTwitter={linkTwitter}
        linkGitHub={linkGitHub}
      />

      {/* <video
        className="fixed z-[-1] w-[100vw] h-[100vh] object-cover "
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src="../my-website/assets/videos/bg2.mp4" type="video/mp4" />
      </video> */}

      <Intro />
      <Content />

      <Footer linkTwitter={linkTwitter} linkGitHub={linkGitHub} />
    </div>
  );
}

export default App;
