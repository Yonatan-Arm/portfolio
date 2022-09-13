import React, { useEffect, useState } from "react";
import { projectService } from "../service/project.service.js";
import { ProjectPreview } from "./ProjectPreview";
import Fade from "react-reveal";
import Loader from "./Loader.jsx";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await projectService.query();
      setProjects(data);
    };
    fetchData();
    return () => {
      setProjects([]);
    };
  }, []);

  const sortBy= async (category) => {
    let projectsToDisplay = await projectService.query();
    if(!category) return setProjects(projectsToDisplay)
    else{
      projectsToDisplay = projectsToDisplay.filter( project => project.label === category || project.tech.includes(category))
    }
    setProjects(projectsToDisplay)
   
  }

  return (
    <Fade left>
      <section className="project-section">
        <h1> My Projects </h1>
        <div className="sort-buttons flex row justify-center" >
          <button onClick={() => sortBy('')}>All</button>
          <button onClick={() => sortBy('Full Stack')}>Full Stack</button>
          <button onClick={() => sortBy('Frontend')}>Frontend</button>
          <button onClick={() => sortBy('React')}>React</button>
          <button onClick={() => sortBy('Vue')}>Vue</button>
          <button onClick={() => sortBy('Angular')} >Angular</button>
          <button onClick={() => sortBy('JavaScript')}>JavaScript Vanilla</button>
        </div>
        <div className="projects flex column align-center">
          <div className="projects-container flex">
            {!projects.length ? <Loader> </Loader> :
              (projects.map((project) => (
              <ProjectPreview key={project._id} project={project} />
            )))
            }
          </div>
        </div>
      </section>
    </Fade>
  );
}
