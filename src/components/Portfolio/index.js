import React, { Component } from "react";

const projects = [
  {
    url: "https://source.unsplash.com/user/erondu/1600x900",
    client: "Apple",
    year: "2012",
    title: "New york city"
  },
  {
    url: "https://source.unsplash.com/user/joshuafuller/1600x900",
    client: "Samsung",
    year: "2016",
    title: "Lost Kingdom"
  },
  {
    url: "https://source.unsplash.com/user/ripato/1600x900",
    client: "IBM",
    year: "2018",
    title: "Los Angeles"
  },
  {
    url: "https://source.unsplash.com/user/charlesdeluvio/1600x900",
    client: "Tesla",
    year: "2016",
    title: "Model X"
  }
];

const PortfolioBox = props => (
  <div
    className="portfolio--content-section__box"
    style={{
      background: `url(${props.project.url}) no-repeat center center`,
      backgroundSize: "cover"
    }}
  >
    <div className="portfolio--content-section__box-overlay">
      <div className="portfolio--content-section__box-overlay__info">
        <div className="portfolio--content-section__box-overlay__info-detail">
          <span>
            Client: {props.project.client} &nbsp; Year: {props.project.year}
          </span>
        </div>
        <div className="portfolio--content-section__box-overlay__info-title">
          <h3>{props.project.title}</h3>
        </div>
        <i className="fas fa-long-arrow-alt-right" />
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
          {projects.map((project, index) => {
            return <PortfolioBox project={project} key={index} />;
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
