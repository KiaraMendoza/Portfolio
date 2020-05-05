import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar.component";
import Footer from "./components/Footer.component";
import Home from "./components/Home.component";
import About from "./components/About.component";
import Projects from "./components/Projects.component";

function App() {
  return (
    <Router>
      <Navbar />
      {/*<div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>*/}
      <Home />
      <About />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
