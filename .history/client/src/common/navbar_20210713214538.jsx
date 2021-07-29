import React from "react";
//import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./navbar.scss";

class Navbar extends React.Component {
    render() {
        return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="index.html" className="navbar-brand">
                <img id="logo" src="../../img/logo-romeo-header.png" />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="competition.html">Live Competition</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="recordings.html">Past Recordings</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="teams.html">Support Teams</a>
                </li>
            </ul>
            </div>
            <div id="navbar-right" className="navbar-right">
                <ul className="navbar-nav mr-auto">

                
            <li className="nav-item"><a id="login" href="login.html" className="btn btn-primary">Log In</a></li>
            <li className="nav-item"><a id="register" href="register.html" className="btn btn-outline-primary">Register</a></li>
            </ul>
            </div>
        </div>
        );
    }
}

export default Navbar;
//ReactDOM.render(<Navbar />, document.getElementById("root"));