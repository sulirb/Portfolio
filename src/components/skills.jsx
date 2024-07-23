import "./skills.scss";
import { useFetchSkills } from "../utils/api";
import Error from "../pages/error";

function Skills() {
  const { data, isLoading, error } = useFetchSkills();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <Error />;

  return (
    <div className="comp">
      <h2 className="comp__title">Compétences</h2>
      <div className="comp__flex">
        <div className="comp__tool">
          <h3>Frontend</h3>
          <div className="comp__tool-flex">
            {data[0].frontend.icon.map((icon, index) => (
              <div key={index} className="comp__div-tool">
                <div className="comp__logo">
                  <img
                    src={icon}
                    alt={`Logo ${data[0].frontend.title[index]}`}
                  />
                </div>
                <p>{data[0].frontend.title[index]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="comp__tool">
          <h3>Backend</h3>
          <div className="comp__tool-flex">
            {data[0].backend.icon.map((icon, index) => (
              <div key={index} className="comp__div-tool">
                <div className="comp__logo">
                  <img
                    src={icon}
                    alt={`Logo ${data[0].backend.title[index]}`}
                  />
                </div>
                <p>{data[0].backend.title[index]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="comp__tool">
          <h3>Outils</h3>
          <div className="comp__tool-flex">
            {data[0].tools.icon.map((icon, index) => (
              <div key={index} className="comp__div-tool">
                <div className="comp__logo">
                  <img src={icon} alt={`Logo ${data[0].tools.title[index]}`} />
                </div>
                <p>{data[0].tools.title[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
