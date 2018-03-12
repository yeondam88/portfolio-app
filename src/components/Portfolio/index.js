import React, { Component } from "react";

const images = [
  {
    url: "https://source.unsplash.com/user/erondu/1600x900"
  },
  {
    url: "https://source.unsplash.com/user/joshuafuller/1600x900"
  },
  {
    url: "https://source.unsplash.com/user/ripato/1600x900"
  },
  {
    url: "https://source.unsplash.com/user/charlesdeluvio/1600x900"
  }
];

const PortfolioBox = props => (
  <div className="portfolio--content-section__box" style={{ background: `url(${props.image.url}) no-repeat center center`, backgroundSize: 'cover' }}>
    <div className="portfolio--content-section__box-overlay">
      <div className="portfolio--content-section__box-overlay__info">
        <span>Client: Apple Year: 2017</span>
      </div>
      <div className="portfolio--content-section__box-overlay__title">
        <h3>Hello World!</h3>
      </div>
    </div>
  </div>
);

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio--content">
        <div className="portfolio--content-title">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio--content-section">
          {images.map((image, index) => {
            return <PortfolioBox image={image} key={index}/>
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
