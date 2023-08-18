import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import "./contacts.css";
function Contacts() {
  const form = useRef();
  const sendMail = (e) => {
    console.log("hola");
    e.preventDefault();
    emailjs.sendForm(
      "service_wcvym9i",
      "template_guex7zl",
      form.current,
      "Ik2_SlA7qvBJQ7FIZ"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="titles">
        <h5>Get in touch</h5>
        <h2>Contact Information</h2>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>luis.alcantarag99@hotmail.com</h5>
            <a href="mailto:luis.alcantarag99@hotmail.com">Send email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://wa.me/15535611734"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={sendMail} ref={form}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Message" required />
          <button className="btn btn-primary"> Submit</button>
        </form>
      </div>
    </section>
  );
}
export default Contacts;
