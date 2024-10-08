import "./header.css";
import React from "react";
import Navbar from "../navbar/Navbar";
import header_logo from "../../assets/images/header_logo.webp";

const Header = () => {
  return (
    <header>
      <img
        className="headerLogo whiteFilter"
        src={header_logo}
        alt="header_logo"
      />
      <Navbar />
    </header>
  );
};

export default Header;
