import React from "react";

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.png";
import img4 from "../img/4.jpg";

import "./Teams.scss";

const CYRUSDescription = "Cyrus was founded in 2012 and participated the RoboCup 2013 for the first time. This team has managed to achieve 2nd place in RoboCup 2018 and fourth place in RoboCup 2017. Also, it has won the 1st place title for IranOpen twice, once in 2014 and the other time in 2018, followed by its last achievement, being the 1st place in RoboCup AsiaPacific 2018. Cyrus team members have created the starter base by simplifying the agent2D base [1] in cooperation with IranOpen’s technical committee members in order to further improve the soccer simulation 2D league and motivate new teams for participation. Cyrus’s base is agent2d.";
const FCP_GPRDescription = "FCP_GPR brings together effort of researchers from Brazil and Portugal, in a continuous effort to develop strategies and evolutions for the Simulated Soccer in Robocup. FCPortugal (FCP) have been participating since 1999 in soccer simulation categories, being the 2000 world champion in the 2D simulation category. GPR2D Team is from the Federal University of Technology - UTFPR, and is participating in simulation competitions since 2009, winning Brazilian 2D competition in 2011, and participating actively on Robocup since 2012. Since 2014, both research teams joined forces and formed FCP_GPR, releasing a set of tools to integrate setplays (or setpieces) to soccer playing agents (see SourceForge.net project fcportugalsetplays).This TDP presents a detailed description of the all the steps necessary to install, and execute matches between FCP_GPR, and two other base teams: the well known Agent2D and the also recently released Gliders2D.";
const MTDescription = "MT was founded in 2012, by the Hefei University Department of Computer Science and Technology Innovation Laboratory of a group of robot-loving soccer students. During the seven years, we take an active part in annual competitions of RoboCup. And there are some achievements, in 2012 and 2013 we won the second prize, in 2014 we won the grand prize,in 2016 Portuguese open tournament the champion,third in RoboCup World Cup,we sixth in the 2017 RoboCup2DWorld Cup,third in the2018 RoboCup2DWorld Cup.By the communication with other teams, we found some deficiencies,and then proposed improvement measures. We hope to verify the effect of improved code in this year's competition, and improve the team's level gradually.";
const NamiraDescription = "Namira Robotics team has been formed by students of Shiraz University and Qazvin Islamic Azad University (QIAU). This team is a combination of some members of Shiraz [3] and Persian Gulf Soccer 2D Simulation Teams [2] in World Cup 2016 and 2017 and some recently added students who study Software & Hardware Engineering and Information Technology at Shiraz University and QIAU. Some members of the team could achieve 1st place in IranOpen 2016 technical challenge, 2nd place in ShirazOpen 2018, 5th place in IranOpen 2016 and 2017 leagues and 6th place in RoboCup WorldCup Competitions 2016. Some members of Namira have participated in various competitions [4][5][6] since spring 2012. They could achieve 1st place in IranOpen 2014, 5th place in WorldCup Brazil 2014, 8th place in WorldCup Netherlands 2013, 9th place in WorldCup China 2015 and 1st place in Kordestan 2013. Introducing novel approaches in soccer simulation, reducing data noise, declining search space for agents’ decision making and using more artificial intelligent algorithms to make agents more dynamic are the most prominent aims of Namira team members.";
const HELIOSDescription = "HELIOS2019 is a simulated soccer team for the RoboCup Soccer Simulation 2D League. The team has been participating in the RoboCup competition since 2000, and has won four championships [1].";
const HfutEngineDescription = "This team description paper mainly explains the work of HfutEngine2D at this stage.We used the logistic regression to optimize the behavior of tackle, and improved the action chain with Monte Carlo tree search (MCTS). The evaluator of action chain performance has improved. According to the feature of our team, we have made the corresponding strategy design. Tested with various strong teams, the current version of HfutEngine2D has promoted in both attack and defence ability.";
const HillStoneDescription = "Team HillStone has taken part in 2D simulation league of RoboCup Japan Open Competition from 2009 in Osaka. We adopted a defensive strategy of allocating player to a ball position, and use ILP algorithm for an effective tactics searching. We discuss a possibility of the strategy and evaluation in our simulation. In the future, we will develop an attack flow from back pass.";
const ITAndroidsDescription = "ITAndroids 2D Soccer Simulation team is composed by undergraduate students of Aeronautics Institute of Technology. The team is currently one of the strongest teams in Brazil, having won 1st place 4 times consecutively from 2012 to 2015, and is the current Vice Champion in 2018 Latin American Competition. Moreover, the team has qualified for the last five editions of RoboCup, having participated of four. This paper describes some of our advances in 2018 and our plans for 2019.";
const RaziDescription = "Razi team is formed from students, has started its activities from November 2012 and has made plan in order to achieve its goal, participating in World Cup competitions. This team has participated in prestigious competitions and has won the third place in IranOpen2017 and IranOpen2018. This team has begun to use artificial intelligence in its decision making. It continues its work with the aim of using artificial intelligence algorithms and online analysis.";
const ReceptivityDescription = "Receptivity is a new team for Robocup 2019 in the 2D simulation league. It is based on agent2d-3.1.1 and the recently released Gliders2d. The strategic focus of the team is on improving the evaluation function with machine learning and reinforcement learning techniques. In particular, fine tuning of the agent decision can be made by identifying situations where the intended action was not successfully completed and instead led to negative outcomes such as loss of ball possession. This paper outlines the process of learning and evaluation for decision fine tuning.";
const RoboCInDescription = "RoboCIn Soccer Simulation 2D team started in 2018 at the Universidade Federal de Pernambuco. Our first competition was at Jo˜ao Pessoa, Para´ıba, Brazil in Latin American Robotics Competition (LARC) 2018 where we obtained the 4th place against teams from Latin America. In this paper we describe some of the approaches that we are currently developing for our second year of research in the category, focusing our studies on the use of Deep Reinforcement Learning and Statistical Methods for decision making in the agents’ chain action.";
const TitansofRoboticsDescription = "This document describes the core of the Soccer 2D team code of the Titans of Robotics team. Titans of Robotics is a a robotics team from the Federal Institute of Espírito Santo (Brazil). In this year, we have sought the evolution of the team through the implementation of heuristic techniques for the selection of players and to define team behavior. The main goal of this document is to describe the team development while presenting the methods and technologies which were applied, as well as the results from past competitions.";
class Teams extends React.Component {
    

    render() {
        return (
            <div className="row-team">
            <div className="row">
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card"><a href="#"><img className="img-fluid card-img-top" src={img1} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">CYRUS</h5>
                        <p>{CYRUSDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />romeo.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card"><a href="#" rel="noreferrer"><img className="card-img-top" src={img2} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">FCP_GPR</h5>
                        <p>{FCP_GPRDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Agent2D.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img3} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">MT</h5>
                        <p>{MTDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />OpuCI.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">Namira</h5>
                        <p>{NamiraDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">HELIOS</h5>
                        <p>{HELIOSDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">HfutEngine</h5>
                        <p>{HfutEngineDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">HillStone</h5>
                        <p>{HillStoneDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">ITAndroids</h5>
                        <p>{ITAndroidsDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">Razi</h5>
                        <p>{RaziDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">Receptivity</h5>
                        <p>{ReceptivityDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">RoboCIn</h5>
                        <p>{RoboCInDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <a href="#"><img className="card-img-top" src={img4} /></a>
                        <div className="card-body">
                        <h5 className="text-bold">Titans of Robotics</h5>
                        <p>{TitansofRoboticsDescription}</p>
                        </div>
                        <div className="card-footer text-center"><small><a href="#"><i className="fa fa-download pe-1" />Axiom.tar.gz<br /></a></small></div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Teams;