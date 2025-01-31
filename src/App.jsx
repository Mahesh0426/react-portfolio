import "./App.css";
import Home from "./components/body/home/Home";
import Header from "./components/header/Header";
import "./index.css";

function App() {
  return (
    <div className="first-line:home bg-slate-800 overflow-hidden">
      <Header />
      <div className="html-Tags max-w-7xl mx-auto relative">
        <Home />
      </div>
    </div>
  );
}

export default App;
