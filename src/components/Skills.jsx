import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="titles">
        <h5>Skills</h5>
        <h2>Technologies</h2>
      </div>

      <div className="container__skills experience__container">
        <div className="experience__front">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>JavaSript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__back">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>Mysql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>FastAPI</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
