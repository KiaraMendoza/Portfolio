import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fontawesome-free/css/all.css"
import "../node_modules/animate.css/animate.min.css";
import HomePage from "./Homepage";
import NotFound from "./components/NotFound.component";
import Project from "./components/Project.component";
import { BrowserRouter as Router, Route, Switch, Redirect, useParams } from "react-router-dom";
import myProjects from "./myProjects";
// import Projects from "./components/Projects.component";
//import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/404" exact component={NotFound} />
          <Route path={`/projects/:projectSlug`}>
            <ProjectSingle />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  )
}

function ProjectSingle() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let projectSlug = useParams();

  for (let x = 0; x <= myProjects.length; x++) {
    if (myProjects[x]['slug'] === (Object.values(projectSlug)[0])) {
      return (
        <Project currentProject={myProjects[x]} />
      );
    } else if (x >= myProjects.length){
      return <Redirect to="/404" />
    }
  }
}

  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
