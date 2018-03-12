import React from "react";

const About = () => {
  return (
    <section className="about--content">
      <div className="about--content-container">
        <div className="about--content-container__education">
          <div className="about--content-title">
            <h1>Education</h1>
          </div>
          <div className="about--content-section">
            <div className="about--content-section__box">
              <h5>UCLA, CA</h5>
              <p>Electric Engineering</p>
              <p>Session: 2012-2014</p>
            </div>
            <div className="about--content-section__box">
              <h5>Stanford, CA</h5>
              <p>Electric Engineering</p>
              <p>Session: 2012-2014</p>
            </div>
            <div className="about--content-section__box">
              <h5>NYU, NY</h5>
              <p>Electric Engineering</p>
              <p>Session: 2012-2014</p>
            </div>
            <div className="about--content-section__box">
              <h5>Columbia, NY</h5>
              <p>Electric Engineering</p>
              <p>Session: 2012-2014</p>
            </div>
          </div>
        </div>

        <div className="about--content-container__experiance">
          <div className="about--content-title">
            <h1>Experiance</h1>
          </div>
          <div className="about--content-section">
            <div className="about--content-section__box-experiance">
              <div className="about--content-section__box-experiance-detail">
                <h5>Google, San Fransico</h5>
                <p>Software Engineer</p>
                <p>Session: 2012-2014</p>
              </div>
              <div className="about--content-section__box-experiance-logo">
                <img
                  src="https://cdn.dribbble.com/users/904380/screenshots/2233565/attachments/415915/thumbnail/revised-google-logo.png"
                  alt="brand"
                />
              </div>
            </div>
            <div className="about--content-section__box-experiance">
              <div className="about--content-section__box-experiance-detail">
                <h5>Facebook, Palo Alto</h5>
                <p>Software Engineer</p>
                <p>Session: 2014-2015</p>
              </div>
              <div className="about--content-section__box-experiance-logo">
                <img
                  src="http://pluspng.com/img-png/facebook-logo-png-1722.png"
                  alt="brand"
                />
              </div>
            </div>
            <div className="about--content-section__box-experiance">
              <div className="about--content-section__box-experiance-detail">
                <h5>IBM, New York</h5>
                <p>Software Engineer</p>
                <p>Session: 2015-2017</p>
              </div>
              <div className="about--content-section__box-experiance-logo">
                <img
                  src="http://logok.org/wp-content/uploads/2014/06/IBM-logo-black.png"
                  alt="brand"
                />
              </div>
            </div>
            <div className="about--content-section__box-experiance">
              <div className="about--content-section__box-experiance-detail">
                <h5>Google, New York</h5>
                <p>Director of Engineer</p>
                <p>Session: 2017-Present</p>
              </div>
              <div className="about--content-section__box-experiance-logo">
                <img
                  src="https://cdn.dribbble.com/users/904380/screenshots/2233565/attachments/415915/thumbnail/revised-google-logo.png"
                  alt="brand"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
