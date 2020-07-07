import React from "react";
import $ from "jquery";

export default class About extends React.Component {
  constructor() {
    super();

    this.addAnimateClass = this.addAnimateClass.bind(this);
  }

  addAnimateClass(e) {
    let mouseLeave = e.target;
    $(mouseLeave).addClass("bounce-animation");
    setTimeout(() => {
      this.deleteAnimatedClass(mouseLeave)
    }, 550);
  }

  deleteAnimatedClass(e) {
    $(e).removeClass("bounce-animation");
  }

  render() {
    return (
      <main id="about" className="about d-flex justify-content-center flex-column" >
        <div className="row container d-flex justify-content-center mx-auto">
          <div className="about-me-paragraph col-12 col-md-6">
            <h2 className="about-title home-titles pt-4 pb-2">About me</h2>
            <p>
              I'm Kiara Mendoza García, a self-teach full-stack web developer. I've been loving tech since I can remember. 
              I don't have too much to say just that when I first saw programming I was like 'Wow! I want to do this!' 
              and started learning somethings about 'Java', then I saw 'Khan Academy' courses..., then 'FreeCodeCamp' ones..., 
              and now its like every tutorial I see about web development that can help me keep improving my projects.
          </p>
            <p>
              At the moment I'm looking for junior position to continue learning and improving.
          </p>
            <div className="row mt-5 mx-0 contact-icons-row">
              <div className="col-auto pl-0"><a href="https://www.linkedin.com/in/kiara-ymg/?locale=en_US"><i onMouseEnter={this.addAnimateClass} className="fab fa-linkedin"></i></a></div>
              <div className="col-auto"><a href="mailto: kiaraymg@gmail.com"><i onMouseEnter={this.addAnimateClass}  className="fas fa-envelope"></i></a></div>
              <div className="col-auto"><a href="https://codepen.io/Lightark"><i onMouseEnter={this.addAnimateClass} className="fab fa-codepen"></i></a></div>
              <div className="col-auto"><a href="https://github.com/KiaraMendoza"><i onMouseEnter={this.addAnimateClass} className="fab fa-github"></i></a></div>
              <div className="col-auto"><a href="/CV-Kiara-2020-EN-Junio.pdf"><i onMouseEnter={this.addAnimateClass}  className="fas fa-print pr-2"></i></a></div>
            </div>
          </div>
          <div className="about-image-container col-12 col-md-6 mt-5 mt-md-0">
            <img className="about-image pb-5 pb-lg-0" src="/img/kiaramg.png" alt="Myself" />
          </div>
        </div>
      </main>
    );
  }
}
