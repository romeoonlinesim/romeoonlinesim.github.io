import React from "react";
import { Parallax } from "react-parallax";

import "./Home.scss";

import background from "./img/bg-1.png";
import secondBackground from "./img/robocup-1.png";

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <Parallax
                    bgImage={background}
                    bgImageAlt="Welcome to Romeo Online Simulator"
                    className="backgroundimages"
                > 
                </Parallax>
                </div>
                <div className="row">
                <img className="img col-lg-6" src={secondBackground} alt="Background" />
                <div className="text col-lg-6 ">
                    <h3 className="grid-item">RoboCup</h3>
                    <p className="grid-item">The RoboCup server Simulator is a research and educational tool for multiagent systems and artificial intelligence. The aim of the RoboCup is to present a new standard problem for AI and robotics. There are two teams of eleven simulated autonomous robotic players playing soccer on the platform. These players (Also called agents) can play the game with one or some different strategies. </p>
                </div>
                </div>
                <div className="row grey">
                <div className="row" />
                <div className="col-lg-6">
                    <p className="para">Wanna inspect your own league?</p>
                    <p className="para">Login to start tournament!</p>
                </div>
                <div className="col-lg-6 row">
                    <div className="row" />
                    <div className="col-lg-3" />
                    <button id="join_today" type="button" className="btn btn-primary col-lg-3">Join Today</button>
                    <div className="col-lg-1" />
                    <button type="button" className="btn btn-outline-primary col-lg-3">Contact Us</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;