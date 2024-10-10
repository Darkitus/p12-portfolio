import "./about.css";
import React from "react";
import skillsData from "../../data/skillsData.json";

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <h1 className="aboutTitle">A propos</h1>
        <div className="aboutDescription">
          <p className="descriptionParagraph">
            Je m'appelle Lorette Bruno et je suis un Intégrateur Web débutant.
          </p>
          <p className="descriptionParagraph">
            Bien que je sois encore au début de mon parcours dans le domaine,
            j'ai déjà acquis des compétences solides en HTML, CSS, JavaScript,
            et React.
          </p>
          <p className="descriptionParagraph">
            J'aime relever de nouveaux défis et continuer à apprendre pour
            perfectionner mes compétences et proposer des projets modernes et
            efficaces.
          </p>
        </div>
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
      <div className="aboutFormationContainer">
        <h2 className="aboutTitle">Formation effectué</h2>
        <ul className="formationList">
          <li className="formationItem">
            2024 - Intégrateur Web chez OpenClassrooms
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
