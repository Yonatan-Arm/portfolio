
export function ProjectPreview({ project }) {
  if (!project) return <div>Loading...</div>;
  return (
      <section className="project-card">
        <div className="project-card-front flex wrap">
          <h2>{project.title}</h2>
          <img
            src={
              "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1652882213/protfolio/" +
              project.title +
              ".jpg"
            }
          />
          <span>{project.label}</span>
        </div>
        <div className="project-info flex column">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project-tech">
              <h3> Project Technology</h3>
          <ul>
          {project.tech.map(tech => 
          <li key={tech}>{tech} </li>    
               )}
          </ul>
          </div>
          <a href={project.gameUrl} target="_blank">
            Go To Project
          </a>
        </div>
      </section>
  );
}
