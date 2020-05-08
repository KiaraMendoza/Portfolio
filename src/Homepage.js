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
    </div>
  )
}

export default HomePage;
