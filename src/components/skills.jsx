import "./skills.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";

function Skills() {
  return (
    <div className="comp">
      <h1 className="comp__title">Compétences</h1>
      <div className="comp__flex">
        <div className="comp__div">
          <div className="comp__logo">
            <FaHtml5 />
          </div>
          <p>HTML</p>
        </div>
        <div className="comp__div">
          <div className="comp__logo">
            <FaCss3Alt />
          </div>
          <p>CSS</p>
        </div>
        <div className="comp__div">
          <div className="comp__logo">
            <FaJs />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="comp__div">
          <div className="comp__logo">
            <FaReact />
          </div>
          <p>React</p>
        </div>
        <div className="comp__div">
          <div className="comp__logo">
            <FaGitAlt />
          </div>
          <p>Git</p>
        </div>
        <div className="comp__div">
          <div className="comp__logo">
            <FaNodeJs />
          </div>
          <p>Node.js</p>
        </div>
        <div className="comp__div">
          <div className="comp__logo">
            <SiExpress />
          </div>
          <p>Express</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
