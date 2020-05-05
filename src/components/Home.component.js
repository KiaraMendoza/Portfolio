import React from "react";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      text: 'A junior web developer'
    }
  }

  render() {
    return (
      <main role="main" className="home">
        <div className="text-center">
          <h1>Hello! I'm Kiara</h1>
            <h4 className="writing-text">{this.state.text}</h4>
        </div>
      </main>
    );
  }
}
