import "./contact.scss";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <div id="contact">
      <div className="cont">
        <div className="cont__mail">
          <h2>Contactez moi :</h2>
          <h1>s.irbah59@gmail.com</h1>
          <a href="mailto:s.irbah59@gmail.com">
            <button className="cont__button">Envoyer un e-mail</button>
          </a>
        </div>
        <div className="cont__rs">
          <a
            href="https://www.linkedin.com/in/sullivan-irbah-270892284/"
            target="_blank"
            rel="noreferrer"
            className="cont__icon"
          >
            <Icon icon="mdi:linkedin" />
          </a>
          <a
            href="https://github.com/sulirb"
            target="_blank"
            rel="noreferrer"
            className="cont__icon"
          >
            <Icon icon="mdi:github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
