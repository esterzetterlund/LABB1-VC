import React, { useEffect, useState } from "react";
import "./style.css"; // För menyens CSS

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Esterzetterlund/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching GitHub repos:", error));
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      
      <br />
      <hr />
      
      <main>
        <h3>Portfolio</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
              : {project.description || "Ingen beskrivning tillgänglig"}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Portfolio;

