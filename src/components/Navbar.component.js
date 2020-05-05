import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  //state = { activeItem: "home" };

  //handleItemClick = (e, { text }) => this.setState({ activeItem: text });

  render() {

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
