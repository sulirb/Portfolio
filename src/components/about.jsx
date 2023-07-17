import "./about.scss";
import { HashLink as Link } from "react-router-hash-link";

function About() {
  return (
    <div className="apropos">
      <h1 className="apropos__title">A propos de moi</h1>
      <div className="apropos__flex">
        <div className="cadre-photo">
          <img
            src="https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/CITROEN-C3-2607629_1.JPG"
            alt="Nature"
          />
        </div>
        <div className="apropos-texte">
          <p>
            A 27 ans, je suis actuellement en reconversion pour travailler dans
            le milieu du développement web.
          </p>
          <p>
            D&apos;un naturel curieux, j&apos;ai découvert l&apos;univers du
            développement de manière autodidacte, puis ensuite j&apos;ai saisi
            l&apos;opportunité d&apos;effectuer une formation de développeur web
            sur Openclassrooms afin de compléter mes connaissances et me
            professionnaliser.
          </p>
          <p>
            Lors de ma formation professionnelle j&apos;ai pu consolider mes
            compétences sur les langages du web (HTML, CSS, JS), puis
            approfondir l&apos;usage de bases de données, Git, React, NodeJS.
          </p>
        </div>
      </div>
      <div className="apropos__buttons">
        <button>Télécharger mon CV</button>
        <Link smooth to="/#contact" className="header__nav_link">
          <button>Me contacter</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
