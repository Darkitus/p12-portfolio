import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <p className="footerText">© 2024 - Réalisé par Lorette Bruno</p>
      <p className="footerText">
        Credits: Free SVG Background by{" "}
        <a
          className="footerLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://bgjar.com"
        >
          BGJar
        </a>
      </p>
    </footer>
  );
};

export default Footer;
