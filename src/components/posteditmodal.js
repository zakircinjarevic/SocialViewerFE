import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import "../assets/styles/postdetails.css";
import { Link } from "react-router-dom";
import config from "../../config";
import { Avatar, Grid, Button } from "@material-ui/core";
import "../assets/styles/stylee.css";
function getModalStyle() {
  const top = 50;
  const left = 50;
  const width = 50;
  const borderRadius = 6;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: `${width}%`,
    borderRadius: `${borderRadius}px`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class SimpleModal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: "",
      name: "",
      created_time: "",
      message: ""
    };
  }

  handleSubmit = close => {
    const post = {
      message: this.state.message || "",
      postid: this.state.postid || "",
      created_time: this.state.created_time || "",
      name: this.state.name
    };
    console.log(post);
    // request.post(
    //   {
    //     url: 'http://localhost:3000/download',
    //     body: { post },
    //     json: true
    //   },
    //   (err, result) => {

    //     if (result.statusCode===200) {
    //       res.redirect("/adminPanel");
    //     } else {
    //       if (client === "IS") res.redirect("/login?token=IS");
    //       else
    //         {
    //           console.log("TCL: result.body.url", result.body.url)
    //           res.redirect(result.body.url + "?token=" + result.body.token);}

    //     }
    //   }
    // )
    console.log("krece");
    fetch("http://localhost:3000/api/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        post
      })
    });
    console.log("proso");
    close();
  };

  handleOpen = () => {
    this.setState({
      open: true
      // id: this.props.postid,
      // name: this.props.name,
      // created_time: this.props.created_time,
      // message: this.props.message
    });
  };
  formatDate = badDate => {
    if (badDate === undefined) return "";
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let date = new Date(badDate);

    var day = date.getDate();
    var monthIndex = date.getMonth() + 1;
    var year = date.getFullYear();

    if (day < 10 && monthIndex < 10)
      return "0" + day + ".0" + monthIndex + "." + year;
    else if (monthIndex < 10) return day + ".0" + monthIndex + "." + year;
    else if (day < 10) return "0" + day + "." + monthIndex + "." + year;
    else return day + "." + monthIndex + "." + year;
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseModal = close => {
    close();
  };
  componentWillReceiveProps(props) {
    if (props.postid)
      this.setState({
        postid: props.postid,
        name: props.name,
        message: props.message,
        created_time: props.created_time
      });
  }

  render() {
    const { classes, open, close, postid } = this.props;
    if (postid) {
      return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={close}
        >
          <div>
            <div style={getModalStyle()} className={classes.paper}>
              <Typography variant="h6" id="modal-title">
                Post details for {this.props.name} on the date{" "}
                {this.formatDate(this.props.created_time)}
              </Typography>
              {/* <Form onSubmit={() => this.handleSubmit(prsnid,close)}> */}

              <div className="custom-half-column">
                <TextField
                  id="standard-full-width"
                  label="Post content"
                  className={classes.textField}
                  value={this.state.message}
                  fullWidth
                  onChange={this.handleChange("message")}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                  className="input-fixed-width"
                />

                <button
                  onClick={() => this.handleSubmit(close)}
                  className="btn btn-custom-primary"
                // className="submitButton"
                >
                  Save and write to disk
                </button>
              </div>
            </div>
            <SimpleModalWrapped />
          </div>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};
// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);
export default SimpleModalWrapped;
