import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-basic">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/competition" className="nav-link">
                            Live Competition
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/recordings" className="nav-link">
                            Past Recordings
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink exact activeClassName="active" to="/teams" className="nav-link">
                            Support Teams
                        </NavLink>
                    </li>
                </ul>
                <p className="copyright">Support: mh487@uowmail.edu.au</p>
            </footer>
        );
    }
}
export default Footer;