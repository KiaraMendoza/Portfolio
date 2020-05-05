import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

$(document).ready(function () {
  $(".nav-link").click(function () {
    let hrefContent = $(this).text().toLowerCase();
    $("html, body").animate(
      {
        scrollTop: $(`#${hrefContent}`).offset().top,
      },
      400
    );
  });
});


export default class Navbar extends React.Component {
  //state = { activeItem: "home" };

  //handleItemClick = (e, { text }) => this.setState({ activeItem: text });

  render() {

    return (
      <div className="navbar-container position-fixed w-100">
        <nav className="navbar navbar-expand navbar-dark">
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
