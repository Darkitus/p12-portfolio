import "./about.css";
import React from "react";
import skillsData from "../../data/skillsData.json";

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <h1 className="aboutTitle">A propos</h1>
        <p className="aboutDescription">
          Faut que je trouve des choses à écrire ici
        </p>
        <div className="socialList">
          <a
            href="https://github.com/Darkitus"
            className="socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/in/votre-profil"
            className="socialLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
      <div className="aboutSkillsContainer">
        <h2 className="aboutTitle">Compétences</h2>
        <ul className="skillsList">
          {skillsData.map((skill) => (
            <li key={skill.id} className="skillItem">
              <i
                className={`${skill.icon} skillIcon`}
                style={{
                  background: skill.gradient,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              ></i>
              <span className="skillText">{skill.name}</span>
              <span className="skillText">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
