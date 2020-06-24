import React from "react";
import Navbar from "./components/Navbar.component";
import Footer from "./components/Footer.component";
import Home from "./components/Home.component";
import About from "./components/About.component";
import Projects from "./components/Projects.component";
import NotFound from "./components/NotFound.component";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
      <div id="sm-indicator" className="d-block d-md-none sm-visible" />
      <div id="lg-indicator" className="d-none d-md-block lg-visible" />
    </div>
  )
}

export default HomePage;
