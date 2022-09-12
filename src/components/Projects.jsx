import React, { useEffect, useState } from "react";
import { projectService } from "../service/project.service.js";
import { ProjectPreview } from "./ProjectPreview";
import Fade from "react-reveal";

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

  if (!projects.length) return <div>Loading...</div>;
  return (
    <Fade left>
      <section className="project-section">
        <h1> My Projects </h1>
        <div className="projects flex column align-center">
          <div className="projects-container flex">
            {projects.map((project) => (
              <ProjectPreview key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}
