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
            alt="Photo de profil"
          />
        </div>
        <div className="apropos-texte">
          <p>
            A 27 ans, j&apos;ai entamé une reconversion vers le monde
            passionnant du développement web. Guidé par ma curiosité naturelle,
            j&apos;ai découvert cet univers de manière autodidacte, ce qui
            m&apos;a incité à approfondir mes connaissances en suivant une
            formation de développeur web sur Openclassrooms.
          </p>
          <p>
            Cette expérience formatrice m&apos;a permis de consolider mes
            compétences dans les langages du web tels que HTML, CSS et
            JavaScript, ainsi que de me familiariser avec des outils essentiels
            tels que les bases de données, Git, React et NodeJS.
          </p>
          <p>
            Je suis aujourd&apos;hui à la recherche de nouvelles opportunités
            professionnelles dans le domaine du développement web, où je
            pourrais mettre à profit ma passion et mes compétences pour
            contribuer à des projets intéressants et stimulants.
          </p>
        </div>
      </div>
      <div className="apropos__buttons">
        <a href="/portfolio/public/cv-sullivan-irbah.pdf" target="blank_">
          <button>Télécharger mon CV</button>
        </a>
        <Link smooth to="/#contact" className="header__nav_link">
          <button>Me contacter</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
