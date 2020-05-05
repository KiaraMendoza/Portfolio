import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="contact" className="footer pt-4">
        <div className="container d-flex justify-content-center">
          <form className="contact-form">
          <h2 className="contact-title pb-3 mb-4 text-center">Contact me!</h2>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email address:</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group form-check d-flex justify-content-center flex-column">
              <input type="checkbox" className="form-check-input mt-0" />
              <label className="form-check-label pl-2">Did you like it? </label>
            </div>
            <button type="submit" className="btn btn-primary"> Let's meet! </button>
          </form>
        </div>
      </footer>
    );
  }
}
