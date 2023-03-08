import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  //LINKS
  var linkLinkedin = "https://github.com/niamorweb";
  var linkGitHub = "https://github.com/niamorweb";

  return (
    <div className="App overflow-hidden ">
      <Header linkLinkedin={linkLinkedin} linkGitHub={linkGitHub} />
      <Intro />
      <Content />

      <Footer linkLinkedin={linkLinkedin} linkGitHub={linkGitHub} />
    </div>
  );
}

export default App;
