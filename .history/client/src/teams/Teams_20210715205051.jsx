import React from "react";

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.png";
import img4 from "../img/4.jpg";

import "./Teams.scss";

const romeoDescription = "Romeo is a team that is created in our own project. Since this team is a new team, it hasn't participated in any official competitions. It is developed based on Agent2D which can allow agents to perform different actions and the team to play soccer through different strategies. However, we did some changes in the algorithm which is after referencing, testing, and comparing the existing algorithms in order to optimize our team.";
const agent2dDescription = "Agent2d is a sample team which utilizes librcsc and contains a data set of the simulated soccer team that can run as a simple but competitive team. Each player can intercept, dribble, pass and shoot by judging the different situations. In agent2d, the formation framework and online multiagent planning framework have been implemented which enable users to change the characteristics of the team behaviour by modifying the team formation and the evaluation function.";
const opuCIDescription = "Team OpuCI_2D started in 2009. CI in opuCI_2D means computational intelligence, which is the main scientific focus of the team. This team is based on agent2d-2.1.0. Although the good strategy has been implemented in agent 2d, the opuCI_2D have modified some source code and the team behaves totally differently from the original agent2d. It adds a ball blocking to the player agent. In addition, the team formation is changed to 5-2-3 to increase the number of defenders. The behaviour of the five defenders is designed to block through-passes, which is not implemented in agent-2d.";
const axiomDescription = "Axiom is a team consisting of undergraduate and graduate students of Iran University of Science and Technology (IUST). This team has participated in many competitions such as Robocup 2012(Mexico City). The team is developed based on Agent2D. The difference is that it contains a new offensive strategy which uses reinforcement learning method. Additionally, Axiom implemented pass algorithm from scratch and they added a new safety checker based on Artificial Neural Network (ANN) in order to achieving more reliable passes.";

class Teams extends React.Component {
    

    render() {
        return (
            <div className="row row-team">
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card"><a href="#"><img className="img-fluid card-img-top" src={img1} /></a>
                        <div className="card-body">
                        <h5>Romeo</h5>
                        <p>{romeoDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />romeo.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card"><a href="#" rel="noreferrer"><img className="card-img-top" src={img2} /></a>
                        <div className="card-body">
                        <h5>Agent2D</h5>
                        <p>{agent2dDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Agent2D.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img3} /></a>
                        <div className="card-body">
                        <h5>OpuCI</h5>
                        <p>{opuCIDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />OpuCI.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5>Axiom</h5>
                        <p>{axiomDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Teams;