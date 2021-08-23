import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Collapse } from "react-bootstrap";
import ToolTip from "@material-ui/core/Tooltip";
import { NavLink } from "react-router-dom";

import "./Recordings.scss";

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

function Recordings() {
    let [open, setOpen] = useState([]);
    let [competitions, setCompetitions] = useState([]);
    let [teams, setTeams] = useState([]);

    const getRecordings = () => {
        fetch(`${BACKEND_URL}/recordings`, { credentials: "include" })
            .then((res) => res.json())
            .then((resBody) => {
                setTeams(resBody.teams);
                setCompetitions(resBody.competitions);
                for (let index in resBody.competitions) {
                    open.push(false);
                }
            });
    };

    const handleDownload = (competitionNumber, leftTeam, rightTeam) => {
        const fileName = `comp${competitionNumber}/comp${competitionNumber}-team${leftTeam}-team${rightTeam}.txt`;

        axios({
            method: "get",
            url: BACKEND_URL + "/recordings/download/" + fileName,
            responseType: "blob",
            headers: {},
        })
            .then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", fileName);
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
                alert(error);
            });
    };

    const handleReplay = (competitionNumber, leftTeam, rightTeam) => {
        return `/comp${competitionNumber}/comp${competitionNumber}-team${leftTeam}-team${rightTeam}.txt`;
    };

    useEffect(() => {
        getRecordings();
    }, []);

    return (
        <div className="container">
            {competitions.map((competition) => {
                let firstRound = [];
                let secondRound = [];
                let thirdRound = [];

                let counter = 1;
                let firstRoundTemp = competition.firstRound.slice(
                    0,
                    competition.firstRound.length
                );
                let firstRoundResultTemp = competition.firstRoundResult.slice(
                    0,
                    competition.firstRoundResult.length
                );
                while (firstRoundTemp.length !== 0) {
                    const leftTeamIndex =  firstRoundTemp[0];
                    const rightTeamIndex = firstRoundTemp[1];
                    const leftTeam =  teams[leftTeamIndex-1].name;
                    const rightTeam = teams[rightTeamIndex-1].name;
                    const leftResult = firstRoundResultTemp[0];
                    const rightResult = firstRoundResultTemp[1];
                    firstRoundTemp.splice(0,2);
                    firstRoundResultTemp.splice(0,2);
                    firstRound.push(<div key={leftTeam + " " + leftResult + " - " + rightResult + rightTeam} className="pb-2">
                        <span className="padding-right">
                            {leftTeam} {leftResult} - {rightResult} {rightTeam}
                        </span>
                        <ToolTip title="Replay">
                            <NavLink exact to={{
                                pathname: "/playback" + handleReplay(competition.index, leftTeamIndex, rightTeamIndex),
                            }}>
                                <i className="fa fa-play" aria-hidden="true" ></i>
                            </NavLink>
                        </ToolTip>
                        <span className="padding-right"></span>
                        <ToolTip title="Download">
                            <a href="#" onClick={() => handleDownload(competition.index, leftTeamIndex, rightTeamIndex)}>
                                <i className="fa fa-download" aria-hidden="true" ></i>
                            </a>
                        </ToolTip>
                    </div>);
                    counter++;
                }

                let secondRoundTemp = competition.secondRound.slice(
                    0,
                    competition.secondRound.length
                );
                let secondRoundResultTemp = competition.secondRoundResult.slice(
                    0,
                    competition.secondRoundResult.length
                );
                if (secondRoundTemp.length !== 0 && secondRoundTemp.length%2 !== 1) {
                    counter = 1;
                    while (secondRoundTemp.length !== 0) {
                        const leftTeamIndex =  secondRoundTemp[0];
                        const rightTeamIndex = secondRoundTemp[1];
                        const leftTeam =  teams[leftTeamIndex-1].name;
                        const rightTeam = teams[rightTeamIndex-1].name;
                        const leftResult = secondRoundResultTemp[0];
                        const rightResult = secondRoundResultTemp[1];
                        secondRoundTemp.splice(0,2);
                        secondRoundResultTemp.splice(0,2);
                        secondRound.push(<div key={leftTeam + " " + leftResult + " - " + rightResult + rightTeam}>
                            <span className="padding-right">
                                {leftTeam} {leftResult} - {rightResult} {rightTeam}
                            </span>
                            <ToolTip title="Replay">
                                <NavLink exact to={{
                                    pathname: "/playback" + handleReplay(competition.index, leftTeamIndex, rightTeamIndex),
                                }}>
                                    <i className="fa fa-play" aria-hidden="true" ></i>
                                </NavLink>
                            </ToolTip>
                            <span className="padding-right"></span>
                            <ToolTip title="Download">
                                <a href="#" onClick={() => handleDownload(competition.index, leftTeamIndex, rightTeamIndex)}>
                                    <i className="fa fa-download" aria-hidden="true" ></i>
                                </a>
                            </ToolTip>
                        </div>);
                        counter++;
                    }
                }

                let thirdRoundTemp = competition.thirdRound.slice(
                    0,
                    competition.thirdRound.length
                );
                let thirdRoundResultTemp = competition.thirdRoundResult.slice(
                    0,
                    competition.thirdRoundResult.length
                );
                if (thirdRoundTemp.length !== 0 && thirdRoundTemp.length%2 !== 1) {
                    counter = 1;
                    while (thirdRoundTemp.length !== 0) {
                        const leftTeamIndex =  thirdRoundTemp[0];
                        const rightTeamIndex = thirdRoundTemp[1];
                        const leftTeam =  teams[leftTeamIndex-1].name;
                        const rightTeam = teams[rightTeamIndex-1].name;
                        const leftResult = thirdRoundResultTemp[0];
                        const rightResult = thirdRoundResultTemp[1];
                        thirdRoundTemp.splice(0,2);
                        thirdRoundResultTemp.splice(0,2);
                        thirdRound.push(<div key={leftTeam + " " + leftResult + " - " + rightResult + rightTeam}>
                            <span className="padding-right">
                                {leftTeam} {leftResult} - {rightResult} {rightTeam}
                            </span>
                            <ToolTip title="Replay">
                                <NavLink exact to={{
                                    pathname: "/playback" + handleReplay(competition.index, leftTeamIndex, rightTeamIndex),
                                }}>
                                    <i className="fa fa-play" aria-hidden="true" ></i>
                                </NavLink>
                            </ToolTip>
                            <span className="padding-right"></span>
                            <ToolTip title="Download">
                                <a href="#" onClick={() => handleDownload(competition.index, leftTeamIndex, rightTeamIndex)}>
                                    <i className="fa fa-download" aria-hidden="true" ></i>
                                </a>
                            </ToolTip>
                        </div>);
                        counter++;
                    }
                }

                return (
                    <div key={competition.index} className="pb-2 row pt-3">
                        <div>
                            <h2>
                                Competition {competition.index}:
                                <Button
                                    variant="link"
                                    onClick={() => {
                                        open[competition.index - 1] =
                                            !open[competition.index - 1];
                                        setOpen([...open]);
                                    }}
                                    aria-controls={
                                        "competition" + competition.index
                                    }
                                    aria-expanded={open[competition.index - 1]}
                                >
                                    <i
                                        className="fa fa-caret-down"
                                        aria-hidden="true"
                                    ></i>
                                </Button>
                            </h2>
                        </div>
                        <div id={"competition" + competition.index}>
                            <div className="round-label pb-2">
                                <b>First Round:</b>
                                <Collapse in={open[competition.index - 1]}>
                                    <div>{firstRound}</div>
                                </Collapse>
                            </div>
                            <div className="round-label pb-2">
                                <b>Second Round:</b>
                                <Collapse in={open[competition.index - 1]}>
                                    <div>{secondRound}</div>
                                </Collapse>
                            </div>
                            {thirdRound.length !== 0 ? (
                                <div className="round-label pb-2">
                                    <b>Third Round:</b>
                                    <Collapse in={open[competition.index - 1]}>
                                        <div>{thirdRound}</div>
                                    </Collapse>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Recordings;
