import React from "react";
import ImageContainer from "./ImageContainer";
import ProfileSection from "./ProfileSection";

const ContentArea = props => (
  <section className="content-area">
    <ImageContainer />
    <ProfileSection />
  </section>
);

export default ContentArea;
