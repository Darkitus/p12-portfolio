import "./projects.css";
import React from "react";
import projectsData from "../../data/projectsData.json";

const githubIcon =
  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">Projets</h2>
      <div className="projectsGrid">
        {projectsData.map((project) => (
          <div key={project.id} className="projectCard">
            <img src={project.image} alt="" className="cardImage" />
            <h3 className="cardTitle">{project.title}</h3>
            <p className="cardDescription">{project.description}</p>
            <div className="cardLinks">
              {project.siteLink && (
                <a
                  className="siteLink"
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visiter
                </a>
              )}
              <a
                className="githubLink"
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className="githubIcon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
