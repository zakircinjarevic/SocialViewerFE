import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SimpleModal from "./posteditmodal";
import config from "../../config";
import { Avatar, Button } from "@material-ui/core";

const CustomTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.white
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:hover": {
      backgroundColor: theme.palette.background.default,
      cursor: "pointer"
    }
  }
});

class CustomizedTable extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, postid: "" };
    this.handleClickEvent = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(post) {
    {
      this.setState({
        postid: post.id,
        open: true,
        message: post.message,
        created_time: post.created_time
      });
      console.log(this.state);
    }
  }

  handleClose() {
    this.setState({ open: false });
  }
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

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    return (
      <div className="home">
        <div className="poststable">
          <div className="posttitle">Facebook posts</div>

          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead className="custom-table-head">
                <TableRow>
                  <CustomTableCell>Person</CustomTableCell>
                  <CustomTableCell>Name</CustomTableCell>
                  <CustomTableCell align="left">Date posted</CustomTableCell>
                  <CustomTableCell align="left">Post content</CustomTableCell>
                </TableRow>
              </TableHead>

              <TableBody className="custom-tbody-td">
                {config.currentUser.posts.data.map(row => (
                  <TableRow
                    onClick={() => this.handleClick(row)}
                    className={classes.row}
                    key={row.id}
                  >
                    <CustomTableCell>
                      <Avatar>
                        <img
                          src={config.currentUser.picture}
                          className={classes.avatar}
                          className="avatarpic"
                        />
                      </Avatar>
                    </CustomTableCell>

                    <CustomTableCell component="td" scope="row">
                      {config.currentUser.name}
                    </CustomTableCell>
                    <CustomTableCell component="td" align="left">
                      {this.formatDate(row.created_time)}
                    </CustomTableCell>
                    <CustomTableCell component="td" align="left">
                      {row.message}
                    </CustomTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <SimpleModal
              open={open}
              close={this.handleClose}
              postid={this.state.postid}
              created_time={this.state.created_time}
              message={this.state.message}
              name={config.currentUser.name}
            />
          </Paper>
        </div>
      </div>
    );
  }
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
