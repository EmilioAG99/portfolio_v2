/* eslint-disable react/prop-types */
import "./projects.css";
import { projects } from "../data/projects";
const ProjectCard = ({ project }) => {
  return (
    <div className="card__project">
      <picture className="image__container">
        <img src={project.image} alt={project.name} className="image" />
      </picture>
      <p className="project__title">{project.name}</p>
      <p className="project__description">{project.desc}</p>
      <ul className="tag__list">
        {project.tags.map((tag, index) => {
          return <li key={index} className="tag">{`#${tag}`}</li>;
        })}
      </ul>
      <button className="btn btn_secondary git">Github</button>
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
