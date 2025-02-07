import AboutMe from "./components/about Me/about";
import ParticlesBG from "./components/animations/ParticlesBG";
import Home from "./components/body/home/Home";
import Contact from "./components/contact/Contact";
import Experience from "./components/expericenc/experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import ScrollToTop from "./components/scrollTop/ScrollTop";
import Sidebar from "./components/sidebar/Sidebar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="first-line:home bg-slate-800 overflow-hidden min-h-screen">
      {/* Particles Background */}
      <ParticlesBG />
      {/* App Content */}
      <ScrollToTop />
      <Header />
      <div style={{ position: "relative", zIndex: 1, color: "#fff" }}>
        <Home />
        <Sidebar />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
