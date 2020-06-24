import React from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";





export default class Navbar extends React.Component {
  //state = { activeItem: "home" };

  //handleItemClick = (e, { text }) => this.setState({ activeItem: text });

  componentDidMount() {
    $(".nav-link").click(function () {
      let hrefContent = $(this).text().toLowerCase();; //$(this).text().toLowerCase();
      $("html, body").animate(
        {
          scrollTop: $(`#${hrefContent}`).offset().top,
        },
        400
      );
    });
  }

  
  render() {

    return (
      <div className="navbar-container position-fixed w-100">
        <nav className="navbar navbar-expand navbar-dark">
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item" key="home">
                <a href="/#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item" key="about">
                <a href="/#about" className="nav-link">About</a>
              </li>
              <li className="nav-item" key="projects">
                <a href="/#projects" className="nav-link">Projects</a>
              </li>
              <li className="nav-item" key="contact">
                <a href="/#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
