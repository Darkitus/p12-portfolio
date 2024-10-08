import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbarList">
        <li className="navbarItem">
          <a className="navbarLink" href="#about">
            A propos
          </a>
        </li>
        <li className="navbarItem">
          <a className="navbarLink" href="#projects">
            Projets
          </a>
        </li>
        <li className="navbarItem">
          <a className="navbarLink" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
