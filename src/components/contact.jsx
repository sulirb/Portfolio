import "./contact.scss";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <div className="cont">
      <div className="cont__mail">
        <h2>Contactez moi :</h2>
        <h1>s.irbah59@gmail.com</h1>
        <a href="mailto:s.irbah59@gmail.com">
          <button className="cont__button">Envoyer un e-mail</button>
        </a>
      </div>
      <div className="cont__rs">
        <h2>Ou bien retrouvez moi sur les réseaux : </h2>
        <a href="https://linkedin.com" className="cont__icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sulirb" className="cont__icon">
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
}

export default Contact;
