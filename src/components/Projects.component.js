import React from "react";
// import About from "./About.component";
import myProjects from "../myProjects";
import $ from "jquery";
//import "../../node_modules/animate.css/animate.min.css";

//animate__delay-${((props.projectPosition)) <= 2 ? 1 : 2}s

const ProjectsCards = props => 
{
  return (
    <div className={`card-container invisible col mb-4 pb-4 pb-md-0`}> 
      <div className={`card `}>
        <a href={`/projects/${props.project.slug}`}>
          <img src={props.project.projectImg} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h5 className="card-title">{props.project.name}</h5>
          <p className="card-text">{props.project.description}</p>
          <p>Tech used:</p>
          <div className="tech-icons d-flex justify-content-center">
            {props.project.techUsed.map(tech => {
              return <i key={`${props.project.slug}-${tech}`} className={`${tech} px-1`}></i>
            })}
          </div>
          <a href={`/projects/${props.project.slug}`} className="btn btn-secondary">See more</a>
        </div>
      </div>
    </div>
  );
}


export default class Projects extends React.Component {
  constructor(){
    super();

    this.state = {
      projects: [...myProjects],
      currentProjectIcons: ['fab fa-react', 'fab fa-js', 'fab fa-sass', 'fab fa-bootstrap'],
      maxProjectsToShow: 6,
    };

    this.ProjectsList = this.ProjectsList.bind(this);
    this.ProjectsShowMore = this.ProjectsShowMore.bind(this);
    this.addAnimateClass = this.addAnimateClass.bind(this);
  }

  componentDidMount() {
    $(window).scroll(function (event) {
      let scroll = $(window).scrollTop() + $(window).height() / 2;
      // let currentProject = $('.current-project');
      let latestsProject = $('.latest-projects');
      let cards = $('.card-container');
      // if (scroll >= currentProject.offset().top) {
      //   $('.current-project-img-container').removeClass('invisible').addClass("animate__animated animate__fadeInLeft");
      //   $('.current-project-info-container').removeClass('invisible').addClass("animate__animated animate__fadeInRight");
      // }
      cards.each(function() {
        if (scroll >= $(this).offset().top) {
          //Desktop animations
          if ($('#lg-indicator').is(':visible')) {
            $(this).removeClass('invisible').addClass("animate__animated animate__fadeInDown");
          } else {
            //Mobile animations
            if (scroll >= (latestsProject.offset().top)) {
              if ($(this).index() % 2 === 0) {
                $(this).removeClass('invisible').addClass("animate__animated animate__fadeInRight");
              } else {
                $(this).removeClass('invisible').addClass("animate__animated animate__fadeInLeft");
              }
            }
          }
        }
      })
    });
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

  ProjectsList(){
    return this.state.projects.map(currentProject => {
      if (this.state.projects.indexOf(currentProject) < this.state.maxProjectsToShow) {
        return <ProjectsCards key={currentProject.slug} project={currentProject} projectPosition={this.state.projects.indexOf(currentProject)} />
      }
      return null;
    });
  }

  ProjectsShowMore(){
    this.setState({ maxProjectsToShow: this.state.maxProjectsToShow + 6});
    if ((this.state.maxProjectsToShow + 6) >= this.state.projects.length) {
      $('.show-more-projects').addClass('d-none');
    }
  }

  render() {
    return (
      <main id="projects" className="projects py-5">
        <div className="latest-projects">
          <h2 className="text-center latest-projects-title home-titles">Latest projects</h2>
          <div className="cards-row row row-cols-1 row-cols-md-2 row-cols-lg-3 container mx-auto">{this.ProjectsList()}</div>
          <div className="pt-4 text-center"><button onClick={this.ProjectsShowMore} className="btn btn-secondary show-more-projects">Show more</button></div>
        </div>
      </main>
    );
  }
}
