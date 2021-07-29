import React from "react";
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-basic">
                <footer>
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