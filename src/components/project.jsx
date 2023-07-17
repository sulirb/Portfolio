import "./project.scss";
import { useFetchProjects } from "../utils/api";
import Error from "../pages/error";
import Slideshow from "./slideshow";

function Project() {
  const { data, isLoading, error } = useFetchProjects();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <Error />;

  const slideshowData = data.map((item) => ({
    title: item.title,
    pictures: item.pictures,
    description: item.description,
    tags: item.tags,
    link: item.link,
  }));

  return (
    <div className="proj">
      <h1 className="proj__title">Projets</h1>
      <Slideshow logos={data.map((item) => item.cover)} data={slideshowData} />
    </div>
  );
}

export default Project;
