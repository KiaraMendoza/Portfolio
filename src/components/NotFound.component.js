import React from "react";

export default class NotFound extends React.Component {
  render() {
    return (
      <header className="not-found container text-center">
        <h2>Error 404 - Dog not found!</h2>
        <img className="" src="/img/404-wolfdog.jpg"/>
        <a className="not-found-button btn btn-danger d-block" href="/">Go back before it cuteness consumes you!</a>
      </header>
    );
  }
}
