import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
