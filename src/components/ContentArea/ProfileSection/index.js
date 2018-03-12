import React from "react";
import { Link } from "react-router-dom";

const ProfileSection = props => (
  <div className="profile-section">
    <div className="profile">
      <h1>
        Lloyd
        <br />
        <span>Park</span>
      </h1>
      <h5>Front-end Developer</h5>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum aut animi
        porro cupiditate, fugiat ullam eos fugit accusantium. Porro debitis
        nulla sed exercitationem rem officia totam nisi nihil harum magnam.
      </p>
      <Link to="/portfolio" className="primary-btn">
        Portfolio
      </Link>
      <Link to="/about" className="ghost-btn">
        Resume
      </Link>
    </div>
  </div>
);

export default ProfileSection;
