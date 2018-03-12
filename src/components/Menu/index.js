import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ menuToggle }) => {
  return (
    <section id="menu">
      <nav>
        <Link to="/" onClick={menuToggle}>
          Home
        </Link>
        <Link to="/about" onClick={menuToggle}>
          About
        </Link>
        <Link to="/portfolio" onClick={menuToggle}>
          Portfolio
        </Link>
        <Link to="/contact" onClick={menuToggle}>
          Contact
        </Link>
      </nav>
    </section>
  );
};

export default Menu;
