import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <Header className="header-container container">
        <Navbar />
        <h2>Header</h2>
      </Header>
    );
  }
}
