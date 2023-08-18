import "./about.css";
import CTA from "./CTA";
import me from "/assets/me.png";
export default function About() {
  return (
    <section id="about" className="about">
      <div className="container header__container">
        <h5 className="text-light">Hello</h5>
        <h1 className="name">Emilio Alcantara</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <div className="img-container">
          <img className="profile-img" src={me} alt="profile-picture" />
        </div>
      </div>
    </section>
  );
}
