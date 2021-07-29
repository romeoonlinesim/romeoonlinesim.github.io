import React, {useState, useEffect} from "react";

import Chat from "./Chat";
import Field from "./Field";
import Bracket from "./Bracket";
import Initiate from "./Initiate";
import "./Competition.scss";

const BACKEND_URL = "http://localhost:3000";

function Competition(props) {
    const [competitionStatus, setCompetitionStatus] = useState(false);

    const rounds = {
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
    }

    const check = () => {
        console.log("check");
        fetch(`${BACKEND_URL}/competition/live`, {credentials: "include"})
            .then(res => res.json())
            .then(resBody => {
                if (resBody.competitionStart === false) {
                    setCompetitionStatus(false);
                    console.log(competitionStatus);
                } else {
                    setCompetitionStatus(true);
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