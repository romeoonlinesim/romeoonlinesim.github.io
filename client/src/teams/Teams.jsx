import React from "react";
import axios from "axios";

import "./Teams.scss";
import Team from "./Team.jsx";

const teams = [
    {
        description: "Romeo was developed in 2021 by students at University of Wollongong, Australia. This team is developed based on WrightEagle's base team. For demonstration purpose, this team used 'Naive Strategy' where players will chase the ball.",
        teamName: "Romeo",
        teamSource: "romeo.tag.xz",
        teamNumber: 1,
    },
    {
        description: "FCP_GPR brings together effort of researchers from Brazil and Portugal, in a continuous effort to develop strategies and evolutions for the Simulated Soccer in Robocup. FCPortugal (FCP) have been participating since 1999 in soccer simulation categories, being the 2000 world champion in the 2D simulation category. GPR2D Team is from the Federal University of Technology - UTFPR, and is participating in simulation competitions since 2009, winning Brazilian 2D competition in 2011, and participating actively on Robocup since 2012. Since 2014, both research teams joined forces and formed FCP_GPR, releasing a set of tools to integrate setplays (or setpieces) to soccer playing agents (see SourceForge.net project fcportugalsetplays).This TDP presents a detailed description of the all the steps necessary to install, and execute matches between FCP_GPR, and two other base teams: the well known Agent2D and the also recently released Gliders2D.",
        teamName: "FCP_GPR",
        teamSource: "FCP_GPR.tar.gz",
        teamNumber: 2,
    },
    {
        description: "MT was founded in 2012, by the Hefei University Department of Computer Science and Technology Innovation Laboratory of a group of robot-loving soccer students. During the seven years, they take an active part in annual competitions of RoboCup. And there are some achievements, in 2012 and 2013 they won the second prize, in 2014 they won the grand prize,in 2016 Portuguese open tournament the champion,third in RoboCup World Cup,they sixth in the 2017 RoboCup2DWorld Cup,third in the2018 RoboCup2DWorld Cup.By the communication with other teams, they found some deficiencies,and then proposed improvement measures. They hope to verify the effect of improved code in this year's competition, and improve the team's level gradually.",
        teamName: "MT",
        teamSource: "MT.tar.gz",
        teamNumber: 3,
    },
    {
        description: "Cyrus was founded in 2012 and participated the RoboCup 2013 for the first time. This team has managed to achieve 2nd place in RoboCup 2018 and fourth place in RoboCup 2017. Also, it has won the 1st place title for IranOpen twice, once in 2014 and the other time in 2018, followed by its last achievement, being the 1st place in RoboCup AsiaPacific 2018. Cyrus team members have created the starter base by simplifying the agent2D base in cooperation with IranOpen’s technical committee members in order to further improve the soccer simulation 2D league and motivate new teams for participation. Cyrus’s base is agent2d.",
        teamName: "Cyrus",
        teamSource: "Cyrus.tar.gz",
        teamNumber: 4,
    },
    {
        description: "HELIOS2019 is a simulated soccer team for the RoboCup Soccer Simulation 2D League. The team has been participating in the RoboCup competition since 2000, and has won four championships. They have released a part of our team’s source codes and related debugging tools in order to help new teams to participate in the competitions and to start the research of multiagent systems. Currently, the released software packages are available at our project site.",
        teamName: "HELIOS",
        teamSource: "HELIOS.tar.gz",
        teamNumber: 5,
    },
    {
        description: "This team description paper mainly explains the work of HfutEngine2D at this stage.They used the logistic regression to optimize the behavior of tackle, and improved the action chain with Monte Carlo tree search (MCTS). The evaluator of action chain performance has improved. According to the feature of our team, they have made the corresponding strategy design. Tested with various strong teams, the current version of HfutEngine2D has promoted in both attack and defence ability.",
        teamName: "HfutEngine",
        teamSource: "HfutEngine.tar.gz",
        teamNumber: 6,
    },
    {
        description: "Team HillStone has taken part in 2D simulation league of RoboCup Japan Open Competition from 2009 in Osaka. They adopted a defensive strategy of allocating player to a ball position, and use ILP algorithm for an effective tactics searching. They discuss a possibility of the strategy and evaluation in our simulation. In the future, they will develop an attack flow from back pass.",
        teamName: "HillStone",
        teamSource: "HillStone.tar.gz",
        teamNumber: 7,
    },
    {
        description: "ITAndroids 2D Soccer Simulation team is composed by undergraduate students of Aeronautics Institute of Technology. The team is currently one of the strongest teams in Brazil, having won 1st place 4 times consecutively from 2012 to 2015, and is the current Vice Champion in 2018 Latin American Competition. Moreover, the team has qualified for the last five editions of RoboCup, having participated of four. This paper describes some of our advances in 2018 and our plans for 2019.",
        teamName: "ITAndroids",
        teamSource: "ITAndroids.tar.gz",
        teamNumber: 8,
    },
    {
        description: "Razi team is formed from students, has started its activities from November 2012 and has made plan in order to achieve its goal, participating in World Cup competitions. This team has participated in prestigious competitions and has won the third place in IranOpen2017 and IranOpen2018. This team has begun to use artificial intelligence in its decision making. It continues its work with the aim of using artificial intelligence algorithms and online analysis.",
        teamName: "Razi",
        teamSource: "Razi.tar.gz",
        teamNumber: 9,
    },
    {
        description: "Receptivity is a new team for Robocup 2019 in the 2D simulation league. It is based on agent2d-3.1.1 and the recently released Gliders2d. The strategic focus of the team is on improving the evaluation function with machine learning and reinforcement learning techniques. In particular, fine tuning of the agent decision can be made by identifying situations where the intended action was not successfully completed and instead led to negative outcomes such as loss of ball possession. This paper outlines the process of learning and evaluation for decision fine tuning.",
        teamName: "Receptivity",
        teamSource: "Receptivity.tar.gz",
        teamNumber: 10,
    },
    {
        description: "RoboCIn Soccer Simulation 2D team started in 2018 at the Universidade Federal de Pernambuco. Our first competition was at Jo˜ao Pessoa, Para´ıba, Brazil in Latin American Robotics Competition (LARC) 2018 where they obtained the 4th place against teams from Latin America. In this paper they describe some of the approaches that they are currently developing for our second year of research in the category, focusing our studies on the use of Deep Reinforcement Learning and Statistical Methods for decision making in the agents’ chain action.",
        teamName: "RoboCIn",
        teamSource: "RoboCIn.tar.gz",
        teamNumber: 11,
    },
    {
        description: "This document describes the core of the Soccer 2D team code of the Titans of Robotics team. Titans of Robotics is a a robotics team from the Federal Institute of Espírito Santo (Brazil). In this year, they have sought the evolution of the team through the implementation of heuristic techniques for the selection of players and to define team behavior. The main goal of this document is to describe the team development while presenting the methods and technologies which were applied, as well as the results from past competitions.",
        teamName: "Titans Of Robotics",
        teamSource: "Titans_of_Robotics.tar.gz",
        teamNumber: 12,
    }
];

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

function Teams() {
    return (
        <div className="row-team">
            <div className="row">
                {teams.map((team) => <Team team={team} />)}
            </div>
        </div>
    );
}

export default Teams;