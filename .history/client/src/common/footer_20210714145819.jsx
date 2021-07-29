import React from "react";
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-basic">
                <footer>
                    <div className="text-center">
                        
                        <p className="copyright">Published with Github Pages</p>
                    </div>
                    
                    <p className="copyright">Support: mh487@uowmail.edu.au</p>
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