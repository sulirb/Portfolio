import Start from "../components/start";
import About from "../components/about";
import Skills from "../components/skills";
import Project from "../components/project";

function Home() {
  return (
    <div>
      <div id="start">
        <Start />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
    </div>
  );
}

export default Home;
