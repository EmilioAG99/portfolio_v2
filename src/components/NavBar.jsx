import "./navbar.css";
import { useState } from "react";
import logo from "/assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
export default function NavBar() {
  const [active, setActive] = useState("about");
  const [openMenu, setOpenMenu] = useState(false);
  const changeAboutView = (e) => {
    e.preventDefault();
    setActive("about");
    const offset = document.getElementById("about").getBoundingClientRect().top;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
    history.pushState(null, null, "#about");
  };
  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo">
          <a href="">
            <img src={logo} alt="logo" className="img-header" />
          </a>
        </div>
        <GiHamburgerMenu
          className="hambruger__menu"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
        <div className={openMenu ? "links" : "links display"}>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={(e) => changeAboutView(e)}
          >
            About Me
          </a>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
            onClick={() => setActive("skills")}
          >
            Skills
          </a>
          <a
            href="#experience"
            className={active === "experience" ? "active" : ""}
            onClick={() => setActive("experience")}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => setActive("projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => setActive("contact")}
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}
