import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  //LINKS
  var linkMail = "mailto:niamorweb@proton.me";
  var linkTwitter = "https://twitter.com/niamor_web";
  var linkGitHub = "https://github.com/niamorweb";

  return (
    <div className="App ">
      <Header
        linkMail={linkMail}
        linkTwitter={linkTwitter}
        linkGitHub={linkGitHub}
      />
      <Intro />
      <Content />

      <Footer linkTwitter={linkTwitter} linkGitHub={linkGitHub} />
    </div>
  );
}

export default App;
