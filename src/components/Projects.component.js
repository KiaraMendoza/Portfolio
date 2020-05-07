import React from "react";
import About from "./About.component";
import myProjects from "../myProjects";

const ProjectsCards = props => (
  <div className="col mb-4">
    <div className="card">
      <img src={props.project.projectImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.project.name}</h5>
        <p className="card-text">{props.project.description}</p>
        <a href={props.project.projectUrl} className="btn btn-secondary">See more</a>
      </div>
    </div>
  </div>
);


export default class Projects extends React.Component {
  constructor(){
    super();

    this.state = {
      projects: [...myProjects],
      maxProjectsToShow: 6,
    };

    this.ProjectsList = this.ProjectsList.bind(this);
    this.ProjectsShowMore = this.ProjectsShowMore.bind(this);
  }

  

  ProjectsList(){
    /*for (let currentProject = 0; currentProject < maxProjectsToShow; currentProject++) {
      console.log(currentProject);
      return <ProjectsCards project={this.state.projects[currentProject]} />
    }*/

    return this.state.projects.map(currentProject => {
      if (this.state.projects.indexOf(currentProject) < this.state.maxProjectsToShow) {
        return <ProjectsCards project={currentProject} />
      }
      
    });
  }

  ProjectsShowMore(){
    this.setState({ maxProjectsToShow: this.state.maxProjectsToShow + 3});
  }

  render() {
    return (
      <main id="projects" className="projects py-5">
        <h2 className="text-center py-4">Projects</h2>
        <div className="row row-cols-1 row-cols-md-3 container mx-auto">{this.ProjectsList()}</div>
        <div className="pt-4 text-center"><button onClick={this.ProjectsShowMore} className="btn btn-secondary">Show more</button></div>
      </main>
    );
  }
}
