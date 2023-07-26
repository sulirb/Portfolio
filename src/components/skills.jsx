import "./skills.scss";
import { useFetchSkills } from "../utils/api";
import Error from "../pages/error";

function Skills() {
  const { data, isLoading, error } = useFetchSkills();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <Error />;
  console.log(data);

  return (
    <div className="comp">
      <h1 className="comp__title">Compétences</h1>
      <div className="comp__flex">
        <div className="comp__flex-front">
          <h2>Frontend</h2>
          {data[0].frontend.icon.find((icon, index) => index === 0) && (
            <div className="comp__div">
              <div className="comp__logo">
                <img
                  src={data[0].frontend.icon[0]}
                  alt={data[0].frontend.title[0]}
                />
              </div>
              <p>{data[0].frontend.title[0]}</p>
            </div>
          )}
          {data[0].frontend.icon.find(
            (icon, index) => index === 1 || index === 2
          ) && (
            <div className="comp__flex-tri">
              {data[0].frontend.icon.map((icon, index) => {
                if (index === 1 || index === 2) {
                  return (
                    <div className="comp__div" key={index}>
                      <div className="comp__logo">
                        <img src={icon} alt={data[0].frontend.title[index]} />
                      </div>
                      <p>{data[0].frontend.title[index]}</p>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>

        <div className="comp__flex-back">
          <h2>Backend</h2>
          {data[0].backend.icon.find((icon, index) => index === 0) && (
            <div className="comp__div">
              <div className="comp__logo">
                <img
                  src={data[0].backend.icon[0]}
                  alt={data[0].backend.title[0]}
                />
              </div>
              <p>{data[0].backend.title[0]}</p>
            </div>
          )}
          {data[0].backend.icon.find(
            (icon, index) => index === 1 || index === 2
          ) && (
            <div className="comp__flex-tri">
              {data[0].backend.icon.map((icon, index) => {
                if (index === 1 || index === 2) {
                  return (
                    <div className="comp__div" key={index}>
                      <div className="comp__logo">
                        <img src={icon} alt={data[0].backend.title[index]} />
                      </div>
                      <p>{data[0].backend.title[index]}</p>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>

      <div className="comp__tool">
        <h2>Outils</h2>
        <div className="comp__tool-flex">
          {data[0].tools.icon.map((icon, index) => (
            <div key={index} className="comp__div-tool">
              <div className="comp__logo">
                <img src={icon} alt={data[0].tools.title[index]} />
              </div>
              <p>{data[0].tools.title[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
