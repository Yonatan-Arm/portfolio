import React, { Component } from "react";
import { projectService } from "../service/project.service.js";
import { ProjectPreview } from "../components/ProjectPreview";
import Fade  from "react-reveal";


export default class myProject extends Component {
  state = {
    projects: null,
  };

  async componentDidMount() {
    const { projects } = this.state;
    const projs = await projectService.query();
    this.setState({
      projects: projs,
    });
  }
  render() {
    const { projects } = this.state;
    if (!projects) return <div>Loading...</div>;
    return (
      <Fade left>
        <section className="project-section">
        <h1> My Projects </h1>
      <div className="projects flex column align-center">
          <div className="projects-container flex">
            {projects.map(project =>     
              <ProjectPreview key={project._id} project={project} />     
               )}
          </div>
      </div>
      </section>
      </Fade>
    );
  }
}


