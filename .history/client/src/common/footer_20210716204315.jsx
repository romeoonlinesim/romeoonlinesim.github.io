import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-basic">
                <footer>
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
                                <i className="fa fa-star-o"></i>
                                Past Recordings
                            </NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink exact activeClassName="active" to="/teams" className="nav-link">
                                <i className="fa fa-steam"></i>
                                Support Teams
                            </NavLink>
                        </li>
                    </ul>
                    <div className="text-center">
                        <a href="https://www.github.com/" target="_blank">
                            <p className="copyright">Published with Github Pages</p>
                        </a>
                        </div>
                        <a target="_blank">
                            <p className="copyright">Support: mh487@uowmail.edu.au</p>
                        </a>
                </footer>
            </div>
        );
    }
}

/*<a href="https://www.github.com/" target="_blank" rel="noreferrer">
                            <p className="copyright">Published with Github Pages</p>
                        </a>

<a href="mailto:mh487@uowmail.edu.au" target="_blank" rel="noreferrer">
                        <p className="copyright">Support: mh487@uowmail.edu.au</p>
                    </a>*/
export default Footer;