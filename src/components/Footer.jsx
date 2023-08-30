import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer__section">
      <div className="socials">
        <a
          href="https://github.com/EmilioAG99"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-emilio-alc%C3%A1ntara-guzm%C3%A1n-4a03291b9/"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedinOption />
        </a>
      </div>
    </footer>
  );
}
