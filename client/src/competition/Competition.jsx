import React, {useState, useEffect} from "react";

import Chat from "./Chat";
import Field from "./Field";
import Bracket from "./Bracket";
import Initiate from "./Initiate";
import "./Competition.scss";

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

function Competition(props) {
    const [competitionStatus, setCompetitionStatus] = useState(false);
    let [rounds, setRounds] = useState({});

    /*const rounds = {
        numberOfTeams: 4,
        matches: {
            firstRound: {
                teams: [{name: "TeamA", score: 1}, {name: "TeamB", score: 0}, {name: "TeamC", score: 3}, {name:"TeamD", score: 2}],
            },
            secondRound: {
                teams: [{name: "TeamA", score: 3}, {name: "TeamC", score: 0}],
            },
            thirdRound: {
                teams: [],
            },
            winner: {
                name: "TeamA",
            },
        }
    }*/

    const check = () => {
        console.log("check");
        fetch(`${BACKEND_URL}/competition/live`, {credentials: "include"})
            .then(res => res.json())
            .then(resBody => {
                if (resBody.competitionStart === false) {
                    setCompetitionStatus(false);
                    console.log(competitionStatus);
                } else {
                    console.log("do something");
                    fetch(`${BACKEND_URL}/competition/brackets`, {credentials: "include"})
                    .then(res => res.json())
                    .then((resBody) => {
                        const teams = resBody.teams;
                        const competition = resBody.competition;
                        console.log(competition);
                        const firstRound = [];
                        console.log(firstRound);
                        for (let i = 0; i < competition.firstRound.length; i++) {
                            const tmp = {
                                name: teams[competition.firstRound[i]-1].name,
                                score: competition.firstRoundResult[i] === null || competition.firstRoundResult === undefined
                                        ? ""
                                        : competition.firstRoundResult[i]
                            }
                            firstRound.push(tmp);
                        }
                        console.log(firstRound);

                        const secondRound = [];
                        if (competition.secondRound.length !== 0) {
                            for (let i = 0; i < competition.secondRound.length; i++) {
                                const tmp = {
                                    name: teams[competition.secondRound[i]-1].name,
                                    score: competition.secondRoundResult[i] === null || competition.secondRoundResult === undefined
                                            ? ""
                                            : competition.secondRoundResult[i]
                                }
                                secondRound.push(tmp);
                            } 
                        } else {
                            for (let i = 0; i < competition.numberOfTeams/2; i++) {
                                const tmp = {
                                    name: "",
                                    score: ""
                                }
                                secondRound.push(tmp);
                            }
                        }

                        const thirdRound = [];
                        if (competition.numberOfTeams === 8) {
                            if (competition.thirdRound.length !== 0) {
                                for (let i = 0; i < competition.thirdRound.length; i++) {
                                    const tmp = {
                                        name: teams[competition.thirdRound[i]-1].name,
                                        score: competition.thirdRoundResult[i] === null || competition.thirdRoundResult === undefined
                                                ? ""
                                                : competition.thirdRoundResult[i]
                                    }
                                    thirdRound.push(tmp);
                                }
                            } else {
                                for (let i = 0; i < competition.numberOfTeams/4; i++) {
                                    const tmp = {
                                        name: "",
                                        score: ""
                                    }
                                    thirdRound.push(tmp);
                                }
                            }
                            
                        }

                        console.log(firstRound);
                        console.log(secondRound);
                        console.log(thirdRound);
                        

                        const temp = {
                            numberOfTeams: competition.numberOfTeams,
                            matches: {
                                firstRound: {
                                    teams: firstRound
                                },
                                secondRound: {
                                    teams: secondRound
                                },
                                thirdRound: {
                                    teams: thirdRound
                                },
                                winner: competition.winner === 0
                                        ? ""
                                        : teams[competition.winner-1].name
                            }
                        }
                        setRounds(temp);
                        setCompetitionStatus(true);
                        console.log(competitionStatus);
                    });
                }
            });
    }

    useEffect(() => {
        check();
    }, []);

    const {authenticated} = props;
    const {user} = props;

    return (
        <div className="competition container">
            {competitionStatus === true
                ? (
                <div>
                    <div className="row">
                        <Field />
                        <div className="col-lg-1" />
                        <Chat authenticated={authenticated} user={user}/>
                    </div>
                    <div className="row">
                        <Bracket rounds={rounds}/>
                    </div>
                </div>)
                : (<Initiate/>)
            }
            
        </div>
    );
}

export default Competition;