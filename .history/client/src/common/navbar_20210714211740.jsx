import React from "react";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./navbar.scss";
import logo from "../img/logo-romeo-header.png";

class Navbar extends React.Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="index.html" className="navbar-brand">
                <img id="logo" src={logo} alt="Romeo Online Simulation"/>
            </a>
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
