import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./navbar.scss";
import logo from "../img/logo-romeo-header.png";

const propTypes = {
    authenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
};

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        //this.props = props;
        this.state = {
            authenticated: false,
            user: {}
        };
        console.log(this.state.authenticated);
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
    
    LogOutDiv = (user) => {
        <div className="dropdown">
            <a id="navbarDropdown" className="welcome dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" area-expanded="false">
                Welcome,  {this.props.user.username}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink exact to="/" className="dropdown-item">Profile</NavLink>
                <NavLink exact to="/" className="dropdown-item">Help and Support</NavLink>
                <div className="dropdown-divider" />
                <a id="logoutButton" className="dropdown-item" href="#">
                    Log Out
                </a>
            </div>
        </div>;
    }

    async componentWillMount() {
        this.setState({
            authenticated: this.props.authenticated,
            user: this.props.user
          });
    }
        

    render() {
        const authenticated = this.state.authenticated;
        console.log(authenticated);

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
                {authenticated === true
                    ? (<this.LogOutDiv user={this.props.user}/>)
                    : (<this.LogInDiv />)
                }
            </nav>
        );
    }
}

export default Navbar;
