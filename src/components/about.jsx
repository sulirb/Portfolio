import "./about.scss";
import { HashLink as Link } from "react-router-hash-link";

function About() {
  return (
    <div className="apropos">
      <h1 className="apropos__title">A propos de moi</h1>
      <p>
        A 27 ans, je suis actuellement en reconversion pour travailler dans le
        milieu du développement web.
      </p>
      <p>
        D&apos;un naturel curieux j&apos;ai découvert l&apos;univers du
        développement de manière autodidacte, puis ensuite j&apos;ai saisi
        l&apos;opportunité d&apos;effectuer une formation de développeur web sur
        Openclassrooms.
      </p>
      <p>
        Lors de ma formation professionnelle j&apos;ai pu acquérir les bases et
        consolider les compétences de plusieurs langages (HTML, CSS,
        Javascript), la gestion de bases de données mais aussi
        l&apos;utilisation du logiciel Git.
      </p>
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
