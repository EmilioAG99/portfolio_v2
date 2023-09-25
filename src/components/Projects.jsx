/* eslint-disable react/prop-types */
import "./projects.css";
import { projects } from "../data/projects";
const ProjectCard = ({ project }) => {
  const { live, repo, desc, name, image } = project;
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="project-info">
        <h3>{name}</h3>
        <p>{desc}</p>
        <div className="project-links">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="titles">
        <h5>Projects</h5>
        <h2>Personal projects</h2>{" "}
      </div>
      <div className="container card__space">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </section>
  );
}
