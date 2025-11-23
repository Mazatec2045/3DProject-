import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Hero, About, Tech, Experience, Works, Contact } from "./components";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
