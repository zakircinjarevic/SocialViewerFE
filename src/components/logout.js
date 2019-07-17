import React, { Component } from "react";
import config from "../../config";

class Logout extends Component {
  render() {
    config.token = "";
    config.currentUser = {};
    this.props.history.push("/");
    return null;
  }
}

export default Logout;
