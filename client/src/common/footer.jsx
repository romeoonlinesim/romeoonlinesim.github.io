import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-basic">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/" className="footer-hover nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/competition" className="footer-hover nav-link">
                            Live Competition
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/recordings" className="footer-hover nav-link">
                            Past Recordings
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/teams" className="footer-hover nav-link">
                            Support Teams
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/quickstart" className="footer-hover nav-link">
                            Quick Start
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/manual" className="footer-hover nav-link">
                            User Manual
                        </NavLink>
                    </li>
                </ul>
                <p className="copyright">Support: mh487@uowmail.edu.au</p>
            </footer>
        );
    }
}
export default Footer;