import React from "react";
import About from "./About.component";


const ProjectsCards = props => (
  <div class="col mb-4">
    <div class="card">
      <img src={props.project.projectImg} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.project.name}</h5>
        <p class="card-text">{props.project.description}</p>
      </div>
    </div>
  </div>
);

const myProjects = [
  {
    name: "Project1",
    description: "Lorem Lorem de mi vida",
    projectImg: "/img/projects/random-quotes-project.jpg",
  },
  {
    name: "Project2",
    description: "Lorem Lorem de mi vida",
    projectImg: "https://via.placeholder.com/350x320",
  },
  {
    name: "Project3",
    description: "Lorem Lorem de mi vida",
    projectImg: "https://via.placeholder.com/350x320",
  },
];

const myProjects2 = [
  {
    name: "Project4",
    description: "Lorem Lorem de mi vida",
    projectImg: "/img/projects/random-quotes-project.jpg",
  },
  {
    name: "Project5",
    description: "Lorem Lorem de mi vida",
    projectImg: "https://via.placeholder.com/350x320",
  },
  {
    name: "Project6",
    description: "Lorem Lorem de mi vida",
    projectImg: "https://via.placeholder.com/350x320",
  },
];

export default class Projects extends React.Component {
  constructor(){
    super();

    this.state = {
      projects: [...myProjects],
    };

    this.ProjectsShowMore = this.ProjectsShowMore.bind(this);
  }

  

  ProjectsList(){
    return this.state.projects.map(currentProject => {
      return <ProjectsCards project={currentProject} />
    });
  }

  ProjectsShowMore(){
    this.setState({projects: [this.state.projects, ...myProjects2]});
    return this.state.projects.map((currentProject) => {
      return <ProjectsCards project={currentProject} />;
    });
  }

  render() {
    return (
      <main id="projects" className="projects py-5">
        <h2 className="text-center py-4">Projects</h2>
        <div class="row row-cols-1 row-cols-md-3 container mx-auto">{this.ProjectsList()}</div>
        <div className="pt-4 text-center"><button onClick={this.ProjectsShowMore} class="btn btn-secondary">Show more</button></div>
      </main>
    );
  }
}
