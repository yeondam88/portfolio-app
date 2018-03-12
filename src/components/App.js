import React, { Component } from "react";
import Menu from "./Menu";
import LeftPanel from "./LeftPanel";
import ContentArea from "./ContentArea";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    menuActive: false,
    location: "home"
  };

  menuToggle = () => {
    this.setState({
      menuActive: !this.state.menuActive
    });
  };

  render() {
    return (
      <div className={`home ${this.state.menuActive ? "menu-active" : ""}`}>
        <div className="menu-icon" onClick={this.menuToggle}>
          <i
            className={`fas ${this.state.menuActive ? "fa-times" : "fa-bars"}`}
          />
        </div>
        <Menu menuToggle={this.menuToggle} />
        <LeftPanel />
        <Switch>
          <Route exact path="/" component={ContentArea} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
