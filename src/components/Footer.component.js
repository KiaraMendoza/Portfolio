import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="contact" className="footer pt-4">
        <div className="container d-flex justify-content-center">
          <form className="contact-form">
          <h2 className="contact-title">Contact me!</h2>
            <div className="form-group">
              <label for="exampleInputPassword1">Name:</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address:</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1"> Did you like it? </label>
            </div>
            <button type="submit" className="btn btn-primary"> Let's meet! </button>
          </form>
        </div>
      </footer>
    );
  }
}
