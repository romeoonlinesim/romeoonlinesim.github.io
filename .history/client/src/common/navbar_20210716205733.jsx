import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./navbar.scss";
import logo from "../img/logo-romeo-header.png";

class Navbar extends React.Component {
    static propTypes = {
        authenticated: PropTypes.bool.isRequired
    };

    LogOutDiv = 
    <div class='dropdown'>
        <a id='navbarDropdown' class='welcome dropdown-toggle' href='#' role='button'  data-toggle='dropdown' aria-haspopup='true' area-expanded='false'>
            Welcome,  {this.props.user.username}
        </a>
        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
            <a class='dropdown-item' href='#'>Profile</a>
            <a class='dropdown-item' href='#'>Help and Support</a>
        <div class='dropdown-divider'></div>
        <a id='logoutButton' class='dropdown-item' href='#'>
            Log Out
        </a>
        </div>
    </div>

    render() {
        const {authenticated} = this.props.authenticated;
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact to="/" className="navbar-brand">
                <img id="logo" src={logo} alt="Romeo Online Simulation"/>
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/" className="nav-link">
                        <i className="fa fa-home"></i>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/competition" className="nav-link">
                        <i className="fa fa-wpexplorer"></i>
                        Live Competition
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/recordings" className="nav-link">
                        <i className="fa fa-star-o"></i>
                        Past Recordings
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/teams" className="nav-link">
                        <i className="fa fa-steam"></i>
                        Support Teams
                    </NavLink>
                </li>
            </ul>
            </div>
            <div id="navbar-right" className="navbar-right">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/login" id="login" className="btn btn-primary">Sign In</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" id="register" className="btn btn-outline-primary">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default Navbar;
