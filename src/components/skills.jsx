import "./skills.scss";
import { Icon } from "@iconify/react";

function Skills() {
  return (
    <div className="comp">
      <h1 className="comp__title">Compétences</h1>
      <div className="comp__flex">
        <div className="comp__flex-front">
          <h2>Frontend</h2>
          <div className="comp__div">
            <div className="comp__logo">
              <Icon icon="logos:sass" />
            </div>
            <p>Sass</p>
          </div>
          <div className="comp__flex-tri">
            <div className="comp__div">
              <div className="comp__logo">
                <Icon icon="logos:javascript" />
              </div>
              <p>JavaScript</p>
            </div>
            <div className="comp__div">
              <div className="comp__logo">
                <Icon icon="logos:react" />
              </div>
              <p>React</p>
            </div>
          </div>
        </div>

        <div className="comp__flex-back">
          <h2>Backend</h2>
          <div className="comp__div">
            <div className="comp__logo">
              <Icon icon="devicon:mongodb-wordmark" />
            </div>
            <p>MongoDB</p>
          </div>
          <div className="comp__flex-tri">
            <div className="comp__div">
              <div className="comp__logo">
                <Icon icon="devicon:express" />
              </div>
              <p>Express</p>
            </div>
            <div className="comp__div">
              <div className="comp__logo">
                <Icon icon="devicon:nodejs" />
              </div>
              <p>Node.js</p>
            </div>
          </div>
        </div>
      </div>

      <div className="comp__tool">
        <h2>Outils</h2>
        <div className="comp__tool-flex">
          <div className="comp__div-tool">
            <div className="comp__logo">
              <Icon icon="devicon:git" />
            </div>
            <p>Git</p>
          </div>
          <div className="comp__div-tool">
            <div className="comp__logo">
              <Icon icon="logos:vitejs" />
            </div>
            <p>Vite</p>
          </div>
          <div className="comp__div-tool">
            <div className="comp__logo">
              <Icon icon="devicon:vscode" />
            </div>
            <p>VS Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
