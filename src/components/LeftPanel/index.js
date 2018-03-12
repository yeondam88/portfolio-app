import React from "react";
import { Link } from "react-router-dom";

const LeftPanel = props => (
  <section className="info-section">
    <div className="logo">
      <Link to="/">AOA</Link>
    </div>
    <div className="info-box">
      <h4>Email</h4>
      <p>lloyd@gmail.com</p>
      <h4>Phone</h4>
      <p>714-123-1234</p>
      <h4>Find Me On</h4>
      <div className="icon-section">
        <a href="/">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="/">
          <i className="fab fa-twitter" />
        </a>
        <a href="/">
          <i className="fab fa-instagram" />
        </a>
        <a href="/">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
  </section>
);

export default LeftPanel;
