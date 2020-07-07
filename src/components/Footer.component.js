import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", like: "" };
  }

  /* Here’s the juicy bit for posting the form submission */ 

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, like } = this.state;
    return (
      <footer id="contact" className="footer pt-4">
        <div className="container d-flex justify-content-center pb-5">
          <form className="contact-form" onSubmit={this.handleSubmit}>
          <h2 className="contact-title pb-3 mb-4 text-center">Contact me!</h2>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" className="form-control" value={name} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label>Email address:</label>
              <input type="email" name="email" className="form-control" value={email} onChange={this.handleChange} required />
            </div>
            <div className="form-group form-check d-flex justify-content-center flex-column">
              <input name="like" id="like" type="checkbox" value={like} onChange={this.handleChange} className="form-check-input mt-0" />
              <label for="like" className="form-check-label pl-2">Did you like it? </label>
            </div>
            <button type="submit" className="btn btn-primary"> Let's meet! </button>
          </form>
        </div>
        <div className="copyright text-center pt-2 pb-1">
          <p>Made with love by Kiara @2020</p>
        </div>
      </footer>
    );
  }
}
