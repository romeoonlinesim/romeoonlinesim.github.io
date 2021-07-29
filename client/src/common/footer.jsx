import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";

class Footer extends React.Component {
    phantomStyle = {
        display: "block",
        padding: "40px 0",
        height: "6rem",
        width: "100%"
      };

    render() {
        return (
            <div>
                <div style={this.phantomStyle}></div>
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
                </div>
            </div>
        );
    }
}
export default Footer;