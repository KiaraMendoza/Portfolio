import React from "react";
// import { Link, useLocation } from "react-router-dom";
import $ from "jquery";





export default class Navbar extends React.Component {
  //state = { activeItem: "home" };

  //handleItemClick = (e, { text }) => this.setState({ activeItem: text });

  componentDidMount() {
    $(".nav-link--effect").click(function () {
      let hrefContent = $(this).text().toLowerCase(); //$(this).text().toLowerCase();
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
              <li className="nav-item" id="link-home">
                <a href="/#home" className="nav-link nav-link--effect">Home</a>
              </li>
              <li className="nav-item" id="link-about">
                <a href="/#about" className="nav-link nav-link--effect">About</a>
              </li>
              <li className="nav-item" id="link-projects">
                <a href="/#projects" className="nav-link nav-link--effect">Projects</a>
              </li>
              <li className="nav-item" id="link-contact">
                <a href="/#contact" className="nav-link nav-link--effect">Contact</a>
              </li>
              <li className="nav-item" id="link-github">
                <a href="https://github.com/KiaraMendoza?tab=repositories" className="nav-link">My Github</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
