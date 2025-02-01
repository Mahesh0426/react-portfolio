import "./App.css";
import AboutMe from "./components/about Me/about";
import ParticlesComponent from "./components/animations/ParticlesBG";

import Home from "./components/body/home/Home";
import Header from "./components/header/Header";
import "./index.css";

function App() {
  return (
    <div className="first-line:home bg-slate-800 overflow-hidden relative min-h-screen">
      <ParticlesComponent />
      <Header />
      <div className="html-Tags max-w-7xl mx-auto relative">
        <Home />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
