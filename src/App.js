import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

import Home from "./Home";

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
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
