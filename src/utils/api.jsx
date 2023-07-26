import { useState, useEffect } from "react";
import dataUrl from "../../public/data.json?url";
import skillUrl from "../../public/skill.json?url";

export function useFetch(method, url, body, options) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, { method, body, ...(options ?? {}) });
        const projectList = await response.json();
        setData(projectList);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [method, url, body, options]);

  return { isLoading, data, error };
}

export const useFetchSkills = () => useFetch("GET", skillUrl);
export const useFetchProjects = () => useFetch("GET", dataUrl);
export const useFetchProject = (id) => {
  const { data, ...rest } = useFetch("GET", dataUrl);
  const project = data.find((project) => project.id === id);
  return { data: project, ...rest };
};
