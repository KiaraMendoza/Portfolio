import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderComponent from "./components/Header.component";
import Footer from "./components/Footer.component";
import Home from "./components/Home.component";
import About from "./components/About.component";
import Projects from "./components/Projects.component";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
