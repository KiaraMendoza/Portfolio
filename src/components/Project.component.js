import React from "react";
import { Link } from "react-router-dom";
import myProjects from "../myProjects";
import Navbar from "./Navbar.component";
import Footer from "./Footer.component";
import $ from "jquery";

const Popup = props => (
    <div className='project-popup'>
        <div className='popup_inner d-flex flex-column justify-content-between'>
            {props.projectGif ? <img src={props.projectGif} /> : <h4 className="h-100 d-flex justify-content-center flex-column">There is no gif of usage's example</h4>}
            <button className="btn btn-primary border-none py-2" onClick={props.closePopup}>Close popup</button>
        </div>
    </div>
);


export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        }

        this.addAnimateClass = this.addAnimateClass.bind(this);
        this.getPreviousProject = this.getPreviousProject.bind(this);
        this.getNextProject = this.getNextProject.bind(this);
        this.changeImgtoGif = this.changeImgtoGif.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }
    componentDidMount() {
        this.getNextProject();
    }

    addAnimateClass(e) {
        let mouseEnter = e.target;
        $(mouseEnter).addClass("bounce-animation");
        setTimeout(() => {
            this.deleteAnimatedClass(mouseEnter)
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

    changeImgtoGif(e){
        e.target.src=`${this.props.currentProject['projectGif']}`
    }


    togglePopup() {
        if ($('#lg-indicator').is(':visible')) {
            this.setState({
                showPopup: !this.state.showPopup
            });
        }
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
                            <div className="project-photo pt-5 mt-5 mt-lg-0 pt-lg-0 col-12 col-lg-6 pr-lg-5">
                                <img src={this.props.currentProject['projectImg']} onClick={this.togglePopup} alt="Project preview" />
                                {this.state.showPopup ?
                                    <Popup
                                        projectGif={this.props.currentProject['projectGif']}
                                        closePopup={this.togglePopup.bind(this)}
                                    />
                                    : null
                                }
                                <a className="btn btn-secondary font-weight-bold mt-4" href={this.props.currentProject['externalUrl']} target="_blank">Check the project!</a>
                                </div>
                            <div className="project-info col-12 col-lg-6 pl-lg-5 pb-5 pb-lg-0">
                                <h2 className="project-title pt-5 pt-lg-0 pb-3">{this.props.currentProject['name']}</h2>
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
                <div id="sm-indicator" className="d-block d-lg-none sm-visible" />
                <div id="lg-indicator" className="d-none d-lg-block lg-visible" />
            </div>
        );
    }
}
