import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Graph } from "../pages/graph";
import { Detail } from "../pages/detail";
import { Home } from "../pages/home";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../common/header/header";

class Routes extends Component {
  render() {
    return (
      <>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id"  component={Detail} />
          <Route exact path="/graph"  component={Graph} />
        </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
