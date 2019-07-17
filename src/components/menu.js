import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "../assets/styles/stylee.css";
import FacebookLogin from "react-facebook-login";
import config from "../../config";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import MenuAppBar from './menuappbar'
import Logout from "./logout";
class Menu extends Component {
  state = {
    isLoggedIn: false, // ASD
    userID: "",
    name: "",
    email: "",
    picture: ""
  };
  responseFacebook = response => {
    config.token = response.accessToken;
    console.log("token:", config.token);
    config.currentUser.posts = response.posts;
    config.currentUser.isLoggedIn = true;
    config.currentUser.userID = response.userID;
    config.currentUser.name = response.name;
    config.currentUser.email = response.email;
    config.currentUser.picture = response.picture.data.url;
    console.log(response);
    this.setState({
      posts: response.posts,
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    if (this.state.email === "zakeroni_bigboy@hotmail.com")
      this.setState({ email: "zakir.95@hotmail.com" });
  };
  componentClicked = () => {
    console.log("clicked");
  };

  render() {
    // config.token = "asd" //ASD
    let fbContent;
    if (this.state.isLoggedIn) {
      console.log(this.state.isLoggedIn);
      fbContent = (

        <div className="info">
          <MenuAppBar LogoutB={this.Logout} />
          {/* <div >
            <a href="http://localhost:8000/">
              <Typography
                className="headerItems"
                variant="inherit"
                color="lightgrey"
              >
                Log out
              </Typography>
            </a>
          </div>
          <div >
            <Link to="/posts">
              <div>
                <Typography
                  className="headerItems"
                  id="contact-us-btn"
                  variant="inherit"
                  color="lightgrey"
                >
                  Posts
                </Typography>
              </div>
            </Link>
          </div> */}
        </div>
      );
    } else
      fbContent = (
        <div className="loginButton">
          <FacebookLogin
            appId="2268195556828836"
            // autoLoad={true}
            fields="name,email,picture,gender,posts"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      );

    return <div className="header">{fbContent}</div>;
  }
}
export default Menu;



