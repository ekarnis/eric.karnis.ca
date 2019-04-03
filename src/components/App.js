import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

import { Home } from "./Home";
import { Resume } from "./Resume";
import Blog from "./Blog";
import Contact from "./Contact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Navigation />
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Resume" exact component={Resume} />
              <Route path="/Blog" exact component={Blog} />
              <Route path="/Contact" exact component={Contact} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
