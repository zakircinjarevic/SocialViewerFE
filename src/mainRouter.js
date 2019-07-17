import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Logout from "./components/logout";
import Posts from "./components/posts";
class MainRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logout" component={Logout} />
          <Route path="/posts" component={Posts} />{" "}
        </Switch>
      </div>
    );
  }
}

export default MainRouter;
