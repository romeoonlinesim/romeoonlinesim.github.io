import React from "react";
import "./navbar.scss";

var NewComponent = React.createClass({
    render: function() {
      return (
  
        <div>
          <nav className="navbar navbar-light navbar-expand-md sticky-top navigation-clean-button" style={{height: '80px', backgroundColor: '#f5f7f9', color: '#ffffff'}}>
            <div className="container-fluid"><a className="navbar-brand" href="#">&nbsp;<img src="assets/img/logo-romeo-header.png" width={150} height={60} /></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link" style={{color: '#191818'}} href="index.html"><i className="fa fa-home" />&nbsp;Home</a></li>
                  <li className="nav-item"><a className="nav-link" style={{color: '#0a0a0a'}} href="liveCompetition.html"><i className="fa fa-wpexplorer" />&nbsp;Live Competition</a></li>
                  <li className="nav-item"><a className="nav-link" style={{color: '#0d0c0c'}} href="pastRecordings.html"><i className="fa fa-star-o" />&nbsp;Past Recordings</a></li>
                  <li className="nav-item"><a className="nav-link" style={{color: '#0b0b0b'}} href="supportTeams.html"><i className="fa fa-steam" />&nbsp;Support Teams</a></li>
                  <li className="nav-item"><a className="nav-link" style={{color: '#0e0e0e'}} href="signin.html"><i className="fa fa-sign-in" />&nbsp;Sign In</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  });