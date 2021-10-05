import React from "react";
import {NavLink} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./navbar.scss";
import logo from "../img/logo-romeo-header.png";
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            authenticated: this.props.authenticated,
            user: this.props.user,
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({menu: !this.state.menu});
    }

    LogInDiv = () => {
        return (
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
        );
    }
    
    LogOutDiv = (obj, show) => {
        return (<div className="dropdown">
            <a href="#" id="navbarDropdown" className="welcome dropdown-toggle" onClick={this.toggleMenu}>
                Welcome,  {obj.user.username}
            </a>
            <div className={"dropdown-menu dropdown-menu-right " + show}>
                {/*<NavLink exact to="/" className="dropdown-item" activeClassName="" onClick={this.toggleMenu}>Profile</NavLink>*/}
                <NavLink exact to="/manual" className="dropdown-item" activeClassName="" onClick={this.toggleMenu}>Help and Support</NavLink>
                <div className="dropdown-divider" />
                <a id="logoutButton" className="dropdown-item" onClick={this.props.handleLogout}>
                    Log Out
                </a>
            </div>
        </div>);
    }
        

    render() {
        const {authenticated} = this.props;
        const {user} = this.props;

        const show = (this.state.menu) ? "show" : "";

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
                            <i className="fa fa-group"></i>
                            Support Teams
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" to="/quickstart" className="nav-link">
                            <i className="fa fa-question-circle"></i>
                            Quick Start
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" to="/manual" className="nav-link">
                            <i className="fa fa-book"></i>
                            User Manual
                        </NavLink>
                    </li>
                </ul>
                </div>
                {{authenticated}.authenticated === true 
                    ? this.LogOutDiv({user}, show)
                    : this.LogInDiv()
                }
            </nav>
        );
    }
}

export default Navbar;
