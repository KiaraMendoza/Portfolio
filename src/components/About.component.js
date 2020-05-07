import React from "react";
import $ from "jquery";

export default class About extends React.Component {

  addAnimateClass(e) {
      $(e.target).addClass("bounce animated"); 
  }

  deleteAnimatedClass(e) {
    $(e.target).removeClass("animated").removeClass("bounce");
  }

  render() {
    return (
      <main id="about" className="about d-flex justify-content-center flex-column" >
        <div className="row container d-flex justify-content-center mx-auto">
          <div className="about-me-paragraph col-12 col-md-6">
            <h2 className="about-title pt-4 pb-2">About me</h2>
            <p>
              I'm Kiara Mendoza García, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec elementum velit ac luctus aliquam.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum
              velit ac luctus aliquam.
          </p>
            <p>
              At the moment I'm looking for an internship to continue improving
          </p>
            <div className="row mt-5 mx-0 contact-icons-row">
              <div className="col-auto pl-0"><a onMouseEnter={this.addAnimateClass} onMouseLeave={this.deleteAnimatedClass} href="https://www.linkedin.com/in/kiara-ymg/?locale=en_US"><i className="fab fa-linkedin"></i></a></div>
              <div className="col-auto"><a onMouseEnter={this.addAnimateClass} onMouseLeave={this.deleteAnimatedClass} href="mailto: kiaraymg@gmail.com"><i className="fas fa-envelope"></i></a></div>
              <div className="col-auto"><a onMouseEnter={this.addAnimateClass} onMouseLeave={this.deleteAnimatedClass} href="https://codepen.io/Lightark"><i className="fab fa-codepen"></i></a></div>
              <div className="col-auto"><a onMouseEnter={this.addAnimateClass} onMouseLeave={this.deleteAnimatedClass} href="/CV-Kiara-2020-EN.pdf"><i class="fas fa-print pr-2"></i></a></div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <img className="about-image" src="/img/kiaramg.png" alt="Myself" />
          </div>
        </div>
      </main>
    );
  }
}
