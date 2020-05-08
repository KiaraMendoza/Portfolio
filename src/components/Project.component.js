import React from "react";
import { Link } from "react-router-dom";
import myProjects from "../myProjects";
import Navbar from "./Navbar.component";
import Footer from "./Footer.component";
import $ from "jquery";

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.addAnimateClass = this.addAnimateClass.bind(this);
        this.getPreviousProject = this.getPreviousProject.bind(this);
        this.getNextProject = this.getNextProject.bind(this);
    }
    componentDidMount() {
        this.getNextProject();
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
    
    getPreviousProject() {
        for (let x = 1; x < myProjects.length; x++) {
            if (myProjects[x]['slug'] === this.props.currentProject['slug']) {
                console.log(`/projects/${myProjects[x - 1]['slug']}`)
                return `/projects/${myProjects[x - 1]['slug']}`;
            }
        }
        return null;
    }
    
    getNextProject() {
        for(let x = 0; x < myProjects.length - 1; x++) {
            if (myProjects[x]['slug'] === this.props.currentProject['slug']) {
                console.log(`/projects/${myProjects[x + 1]['slug']}`)
                return `/projects/${myProjects[x + 1]['slug']}`;
            }
        }
        return null;
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar />
                <main className="project-detail text-center d-flex justify-content-center flex-column">
                    <div className="container position-relative">
                        <div className={this.getPreviousProject() ? 'position-absolute left-icon' : 'd-none'}><a href={this.getPreviousProject()}><i class="fas fa-chevron-left" ></i></a></div>
                        <div className="row mx-0">
                            <div className="project-photo col-12 col-lg-6 pr-lg-5">
                                <img src={this.props.currentProject['projectImg']} alt="Project preview" />
                                <a className="btn btn-secondary font-weight-bold mt-4" href={this.props.currentProject['externalUrl']}>Check the project!</a>
                                </div>
                            <div className="project-info col-12 col-lg-6 pl-lg-5 pb-5 pb-lg-0">
                                <h2 className="pt-5 pt-lg-0 pb-3">{this.props.currentProject['name']}</h2>
                                <p className="pb-2">{this.props.currentProject['info']}</p>
                                <p className="pb-2">Tech used:</p>
                                <div className="tech-icons d-flex justify-content-center">{this.props.currentProject['techUsed'].map(tech => {
                                    return <i className={`${tech} px-3`} onMouseEnter={this.addAnimateClass}></i>
                                })}</div>
                            </div>
                        </div>
                        <div className={this.getNextProject() ? 'position-absolute right-icon' : 'd-none'}><a href={this.getNextProject()}><i class="fas fa-chevron-right" ></i></a></div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
