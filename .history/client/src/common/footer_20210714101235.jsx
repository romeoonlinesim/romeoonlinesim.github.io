import React from "react";
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-basic">
                <footer>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item"><a href="#">Live Competition</a></li>
                    <li className="list-inline-item"><a href="#">Past Recordings</a></li>
                    <li className="list-inline-item"><a href="#">Support Teams</a></li>
                </ul>
                <div className="text-center"><a href="https://www.github.com/" target="_blank">
                    <p className="copyright">Published with Github Pages</p>
                    </a></div><a target="_blank">
                    <p className="copyright">Support: mh487@uowmail.edu.au</p>
                </a>
                </footer>
            </div>
        );
    }
}