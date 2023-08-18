/* eslint-disable react/prop-types */
import "./experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experience } from "../data/experience";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ exp }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={exp.date}
      iconStyle={{ background: exp.iconBg }}
      icon={
        <div className="icon">
          <img
            src={exp.icon}
            alt={experience.company_name}
            className="icon__image"
          />
        </div>
      }
    >
      <div>
        <h3 className="company__title">{exp.title}</h3>
        <p className="company" style={{ margin: 0 }}>
          {exp.company}
        </p>
      </div>

      <ul className="responsabilities">
        {exp.responsabilities.map((point, index) => (
          <li key={`experience-point-${index}`} className="list__item">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
export default function Experience() {
  return (
    <section id="experience">
      <div className="titles">
        <h5>Experience</h5>
        <h2>Past jobs / Social service.</h2>
      </div>

      <div className="timeline container">
        <VerticalTimeline>
          {experience.map((exp, index) => {
            return <ExperienceCard key={index} exp={exp} />;
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
