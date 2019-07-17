import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import config from "../../config";
import "../assets/styles/stylee.css";
class Home extends Component {
  render() {
    console.log("token:", config.token);
    if (config.token == "") {
      return (
        <div className="home">
          <div className="meetTimekeeper">
            <h1>Meet Social Viewer !</h1>
            <h2>Ever wondered what information you shared on facebook?</h2>
            <div>
              <div>
                <h5>Log in to proceed</h5>
              </div>
            </div>
          </div>
        </div>
      );
    } else return <div className="home" />;
  }
}

export default Home;
