import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";
import '../assets/styles/stylee.css'
import { Redirect } from 'react-router-dom'
import { Avatar, Button } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import config from '../../config'

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleChange(event) {
        setAuth(event.target.checked);
    }

    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    // function handleCloseAndLogout() {
    //     setAnchorEl(null);
    //     this.props.Logout()
    // }
    function Logout() {
    }

    return (

        <div className='root' >
            <AppBar position="static">
                <Toolbar>
                    {auth && (
                        <div className="headerButtonsContainer">
                            <Tooltip title="Posts">
                                <Link to='/posts'> <div className="headerButtons1">  <IconButton style={{ color: "white" }} aria-label="Menu">
                                    <MenuIcon />
                                </IconButton></div></Link>
                            </Tooltip>
                            <div className="headerButtons">

                                <IconButton
                                    aria-label="Account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    style={{ color: "white" }}

                                >

                                    <Avatar>
                                        <img
                                            src={config.currentUser.picture}
                                            className="avatarpic"
                                        />
                                    </Avatar>
                                </IconButton>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >

                                    <a className="noUnderline" href="http://localhost:8000"><MenuItem onClick={handleClose}>Logout</MenuItem></a>
                                    {/* I am not proud of this */}
                                </Menu>

                            </div>



                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div >
    );
}