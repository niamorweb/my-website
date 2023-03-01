import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  //LINKS
  var linkMail = "mailto:niamorweb@proton.me";
  var linkGitHub = "https://github.com/niamorweb";

  return (
    <div className="App ">
      <Header linkMail={linkMail} linkGitHub={linkGitHub} />
      <Intro />
      <Content />

      <Footer linkGitHub={linkGitHub} />
    </div>
  );
}

export default App;
