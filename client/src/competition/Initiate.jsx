import React, {useState, useRef} from "react";
import Select from "react-select";
import ToolTip from "@material-ui/core/Tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDice} from "@fortawesome/free-solid-svg-icons";

import "./Initiate.scss";

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

function Initiate(props) {
    const {authenticated} = props;

    const [selectedOptions, setSelectedOptions] = useState(null);
    const [numberOfTeams, setNumberOfTeams] = useState({value:4, label:4});
    const [competitionStatus, setCompetitionStatus] = useState(false);

    const messageRef = useRef();

    const numberOptions = [
        { value: 4, label: 4 },
        { value: 8, label: 8 }
    ];

    const teamOptions = [
        { value: 1, label: "CYRUS" },
        { value: 2, label: "FC_Portugal" },
        { value: 3, label: "MT" },
        { value: 4, label: "Namira" },
        { value: 5, label: "HELIOS" },
        { value: 6, label: "HfutEngine" },
        { value: 7, label: "HillStone" },
        { value: 8, label: "ITAndroids" },
        { value: 9, label: "Razi" },
        { value: 10, label: "Receptivity" },
        { value: 11, label: "RoboCIn" },
        { value: 12, label: "Titans_of_Robotics" },
    ]

    const handleChangeNumber = (numberOfTeams) => {
        setNumberOfTeams(numberOfTeams);
        if (selectedOptions !== null && selectedOptions.length > numberOfTeams.value) {
            setSelectedOptions(selectedOptions.slice(0, numberOfTeams.value));
        }
    } 

    const handleChangeTeams = (selectedOptions) => {
        if (selectedOptions.length > numberOfTeams.value) {
            return;
        }
        setSelectedOptions(selectedOptions);
    }

    const randomize = () => {
        setSelectedOptions(teamOptions.sort(() => Math.random() - 0.5).slice(0, numberOfTeams.value));
    }

    const displayWarning = () => {
        if (!{authenticated}.authenticated) {
            alert("You need to log in to start a new competition");
        }
    }

    const handleStart = () => {
        if (selectedOptions === null || selectedOptions.length !== numberOfTeams.value) {
            setErrorMessage("You haven't selected enough participants. Try to select more participants or use randomize function.");
            return;
        }

        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({
                numberOfTeams: numberOfTeams.value,
                teams: selectedOptions.map(options => options.value)
            })
        }

        fetch(`${BACKEND_URL}/competition/start`, requestOptions)
        .then(res => res.json())
        .then(returnMsg => {
            if (returnMsg.success === false) {
                setErrorMessage("There is an ongoing competition");
            } else {
                setCompetitionStatus(true);
                window.location.reload();
            }
        })
    }

    const setErrorMessage = (message) => {
        messageRef.current.innerText = message;
    }
    
    return (
        <div className="row">
            <table className="mb-2">
                <tbody>
                    <tr>
                        <td className="input-label">
                            <label>Number of participants:</label>
                        </td>
                        <td>
                            <Select
                                value={numberOfTeams}
                                onChange={handleChangeNumber}
                                options={numberOptions}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="input-label">
                            <label className="padding-right">Participants:</label>
                            <ToolTip title="Randomize">
                                <a href="#" className="link" onClick={randomize}>
                                    <i className="fa fa-dice" aria-hidden="true" ></i>
                                    <FontAwesomeIcon icon={faDice} />
                                </a>
                            </ToolTip>
                            
                        </td>
                        <td>
                            <Select 
                                value={selectedOptions}
                                onChange={handleChangeTeams}
                                options={teamOptions}
                                isMulti={true}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="pb-3 mr-0 row">
                <div ref={messageRef} className="error-message">
                    {{authenticated}.authenticated === false 
                        ? "You need to log in to start a new competition"
                        : ""}
                </div>
            </div>
            <div className="col-lg-9"></div>
            <div className="col-lg-3" onClick={displayWarning}>
                <input className="btn btn-primary col-lg-12" type="button" value="Start the competition" onClick={handleStart} disabled={!{authenticated}.authenticated}/>
            </div>
        </div>
    );
}

export default Initiate;