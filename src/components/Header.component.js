import React from "react";
import Navbar from "./Navbar.component";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Navbar />
        <h2>Header</h2>
      </header>
    );
  }
}
