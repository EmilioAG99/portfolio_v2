import "./details.css";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
const services = [
  {
    title: "Web developer",
    icon: <GrReactjs className="icons" />,
  },
  {
    title: "Backend developer",
    icon: <FaNodeJs className="icons" />,
  },
];
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="card">
      <motion.div
        className="services-card"
        variants={fadeIn("rigth", "spring", 0, 5 * index, 0.75)}
      >
        <div className="moving-div">
          <h3>{title}</h3>
          {icon}
        </div>
      </motion.div>
    </Tilt>
  );
};
export default function Details() {
  return (
    <section className="container">
      <div className="titles">
        <h5>About</h5>
        <h2>Overview.</h2>
      </div>
      <div className="details">
        <p>
          Software engineer interested in developing innovative solutions using
          new technologies to optimize processes. I aim to incorporate new
          technologies into my work, enabling efficient solutions that drive
          significant improvements.
        </p>
      </div>
      <div className="technologies">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </section>
  );
}
