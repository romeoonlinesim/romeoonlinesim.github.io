import React from "react";
import axios from "axios";

import cyrus_logo from "../img/cyrus_logo.png";
import fcpgpr_logo from "../img/fcpgpr_logo.png";
import helios_logo from "../img/helios_logo.png";
import hillstone_logo from "../img/hillstone_logo.png";
import it_androids_logo from "../img/it_androids_logo.png";
import receptivity_logo from "../img/helios_logo.png";
import robo_cin_logo from "../img/robo_cin_logo.png";
import titans_of_robotics_logo from "../img/titans_of_robotics_logo.png";

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.png";
import img4 from "../img/4.jpg";

import "./Teams.scss";

const CYRUS = {
    description: "Cyrus was founded in 2012 and participated the RoboCup 2013 for the first time. This team has managed to achieve 2nd place in RoboCup 2018 and fourth place in RoboCup 2017. Also, it has won the 1st place title for IranOpen twice, once in 2014 and the other time in 2018, followed by its last achievement, being the 1st place in RoboCup AsiaPacific 2018. Cyrus team members have created the starter base by simplifying the agent2D base [1] in cooperation with IranOpen’s technical committee members in order to further improve the soccer simulation 2D league and motivate new teams for participation. Cyrus’s base is agent2d.",
    teamName: "Cyrus",
    teamSource: "Cyrus.tar.gz",
    teamNumber: 1,
    logo: cyrus_logo
};
const FCP_GPR = {
    description: "FCP_GPR brings together effort of researchers from Brazil and Portugal, in a continuous effort to develop strategies and evolutions for the Simulated Soccer in Robocup. FCPortugal (FCP) have been participating since 1999 in soccer simulation categories, being the 2000 world champion in the 2D simulation category. GPR2D Team is from the Federal University of Technology - UTFPR, and is participating in simulation competitions since 2009, winning Brazilian 2D competition in 2011, and participating actively on Robocup since 2012. Since 2014, both research teams joined forces and formed FCP_GPR, releasing a set of tools to integrate setplays (or setpieces) to soccer playing agents (see SourceForge.net project fcportugalsetplays).This TDP presents a detailed description of the all the steps necessary to install, and execute matches between FCP_GPR, and two other base teams: the well known Agent2D and the also recently released Gliders2D.",
    teamName: "FCP_GPR",
    teamSource: "FCP_GPR.tar.gz",
    teamNumber: 2,
    logo: fcpgpr_logo
};
const MT = {
    description: "MT was founded in 2012, by the Hefei University Department of Computer Science and Technology Innovation Laboratory of a group of robot-loving soccer students. During the seven years, we take an active part in annual competitions of RoboCup. And there are some achievements, in 2012 and 2013 we won the second prize, in 2014 we won the grand prize,in 2016 Portuguese open tournament the champion,third in RoboCup World Cup,we sixth in the 2017 RoboCup2DWorld Cup,third in the2018 RoboCup2DWorld Cup.By the communication with other teams, we found some deficiencies,and then proposed improvement measures. We hope to verify the effect of improved code in this year's competition, and improve the team's level gradually.",
    teamName: "MT",
    teamSource: "MT.tar.gz",
    teamNumber: 3,
    logo: img4
};
const Namira = {
    description: "Namira Robotics team has been formed by students of Shiraz University and Qazvin Islamic Azad University (QIAU). This team is a combination of some members of Shiraz [3] and Persian Gulf Soccer 2D Simulation Teams [2] in World Cup 2016 and 2017 and some recently added students who study Software & Hardware Engineering and Information Technology at Shiraz University and QIAU. Some members of the team could achieve 1st place in IranOpen 2016 technical challenge, 2nd place in ShirazOpen 2018, 5th place in IranOpen 2016 and 2017 leagues and 6th place in RoboCup WorldCup Competitions 2016. Some members of Namira have participated in various competitions [4][5][6] since spring 2012. They could achieve 1st place in IranOpen 2014, 5th place in WorldCup Brazil 2014, 8th place in WorldCup Netherlands 2013, 9th place in WorldCup China 2015 and 1st place in Kordestan 2013. Introducing novel approaches in soccer simulation, reducing data noise, declining search space for agents’ decision making and using more artificial intelligent algorithms to make agents more dynamic are the most prominent aims of Namira team members.",
    teamName: "Namira",
    teamSource: "Namira.tgz",
    teamNumber: 4,
    logo: img4
};
const HELIOS = {
    description: "HELIOS2019 is a simulated soccer team for the RoboCup Soccer Simulation 2D League. The team has been participating in the RoboCup competition since 2000, and has won four championships [1].",
    teamName: "HELIOS",
    teamSource: "HELIOS.tar.gz",
    teamNumber: 5,
    logo: helios_logo
} ;
const HfutEngine = {
    description: "This team description paper mainly explains the work of HfutEngine2D at this stage.We used the logistic regression to optimize the behavior of tackle, and improved the action chain with Monte Carlo tree search (MCTS). The evaluator of action chain performance has improved. According to the feature of our team, we have made the corresponding strategy design. Tested with various strong teams, the current version of HfutEngine2D has promoted in both attack and defence ability.",
    teamName: "HfutEngine",
    teamSource: "HfutEngine.tar.gz",
    teamNumber: 6,
    logo: img4
};
const HillStone = {
    description: "Team HillStone has taken part in 2D simulation league of RoboCup Japan Open Competition from 2009 in Osaka. We adopted a defensive strategy of allocating player to a ball position, and use ILP algorithm for an effective tactics searching. We discuss a possibility of the strategy and evaluation in our simulation. In the future, we will develop an attack flow from back pass.",
    teamName: "HillStone",
    teamSource: "HillStone.tar.gz",
    teamNumber: 7,
    logo: hillstone_logo
};
const ITAndroids = {
    description: "ITAndroids 2D Soccer Simulation team is composed by undergraduate students of Aeronautics Institute of Technology. The team is currently one of the strongest teams in Brazil, having won 1st place 4 times consecutively from 2012 to 2015, and is the current Vice Champion in 2018 Latin American Competition. Moreover, the team has qualified for the last five editions of RoboCup, having participated of four. This paper describes some of our advances in 2018 and our plans for 2019.",
    teamName: "ITAndroids",
    teamSource: "ITAndroids.tar.gz",
    teamNumber: 8,
    logo: it_androids_logo
};
const Razi = {
    description: "Razi team is formed from students, has started its activities from November 2012 and has made plan in order to achieve its goal, participating in World Cup competitions. This team has participated in prestigious competitions and has won the third place in IranOpen2017 and IranOpen2018. This team has begun to use artificial intelligence in its decision making. It continues its work with the aim of using artificial intelligence algorithms and online analysis.",
    teamName: "Razi",
    teamSource: "Razi.tar.gz",
    teamNumber: 9,
    logo: img4
};
const Receptivity = {
    description: "Receptivity is a new team for Robocup 2019 in the 2D simulation league. It is based on agent2d-3.1.1 and the recently released Gliders2d. The strategic focus of the team is on improving the evaluation function with machine learning and reinforcement learning techniques. In particular, fine tuning of the agent decision can be made by identifying situations where the intended action was not successfully completed and instead led to negative outcomes such as loss of ball possession. This paper outlines the process of learning and evaluation for decision fine tuning.",
    teamName: "Receptivity",
    teamSource: "Receptivity.tar.gz",
    teamNumber: 10,
    logo: receptivity_logo
};
const RoboCIn = {
    description: "RoboCIn Soccer Simulation 2D team started in 2018 at the Universidade Federal de Pernambuco. Our first competition was at Jo˜ao Pessoa, Para´ıba, Brazil in Latin American Robotics Competition (LARC) 2018 where we obtained the 4th place against teams from Latin America. In this paper we describe some of the approaches that we are currently developing for our second year of research in the category, focusing our studies on the use of Deep Reinforcement Learning and Statistical Methods for decision making in the agents’ chain action.",
    teamName: "RoboCIn",
    teamSource: "RoboCIn.tar.gz",
    teamNumber: 11,
    logo: robo_cin_logo
};
const TitansofRobotics = {
    description: "This document describes the core of the Soccer 2D team code of the Titans of Robotics team. Titans of Robotics is a a robotics team from the Federal Institute of Espírito Santo (Brazil). In this year, we have sought the evolution of the team through the implementation of heuristic techniques for the selection of players and to define team behavior. The main goal of this document is to describe the team development while presenting the methods and technologies which were applied, as well as the results from past competitions.",
    teamName: "Titans Of Robotics",
    teamSource: "Titans_of_Robotics.tar.gz",
    teamNumber: 12,
    logo: titans_of_robotics_logo
};

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

function Teams() {
    const handleDownload = (teamNumber, teamSource) => {
        axios({
            method: "get",
            url: BACKEND_URL + "/teams/download/" + teamNumber + "/" + teamSource,
            responseType: "blob",
            headers: {},
        })
            .then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", teamSource);
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div className="row-team">
            <div className="row">
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{CYRUS.teamName}</h5>
                            <p>{CYRUS.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(CYRUS.teamNumber, CYRUS.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {CYRUS.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{FCP_GPR.teamName}</h5>
                            <p>{FCP_GPR.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(FCP_GPR.teamNumber, FCP_GPR.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {FCP_GPR.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{MT.teamName}</h5>
                            <p>{MT.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(MT.teamNumber, MT.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {MT.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{Namira.teamName}</h5>
                            <p>{Namira.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(Namira.teamNumber, Namira.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {Namira.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{HELIOS.teamName}</h5>
                            <p>{HELIOS.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(HELIOS.teamNumber, HELIOS.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {HELIOS.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{HfutEngine.teamName}</h5>
                            <p>{HfutEngine.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(HfutEngine.teamNumber, HfutEngine.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {HfutEngine.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{HillStone.teamName}</h5>
                            <p>{HillStone.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(HillStone.teamNumber, HillStone.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {HillStone.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{ITAndroids.teamName}</h5>
                            <p>{ITAndroids.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(ITAndroids.teamNumber, ITAndroids.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {ITAndroids.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{Razi.teamName}</h5>
                            <p>{Razi.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(Razi.teamNumber, Razi.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {Razi.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{Receptivity.teamName}</h5>
                            <p>{Receptivity.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(Receptivity.teamNumber, Receptivity.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {Receptivity.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{RoboCIn.teamName}</h5>
                            <p>{RoboCIn.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(RoboCIn.teamNumber, RoboCIn.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {RoboCIn.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
                <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-bold">{TitansofRobotics.teamName}</h5>
                            <p>{TitansofRobotics.description}</p>
                        </div>
                        <div className="card-footer text-center">
                            <small>
                                <a href="#" onClick={() => handleDownload(TitansofRobotics.teamNumber, TitansofRobotics.teamSource)} rel="noreferrer">
                                    <i className="fa fa-download pe-1" />
                                    {TitansofRobotics.teamSource}
                                    <br />
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teams;
