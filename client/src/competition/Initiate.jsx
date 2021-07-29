import React, {useState, useRef} from "react";
import Select from "react-select";
import chroma from "chroma-js";
import ToolTip from "@material-ui/core/Tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDice} from "@fortawesome/free-solid-svg-icons";

import "./Initiate.scss";

const BACKEND_URL = "http://localhost:3000";

function Initiate(props) {
    const [selectedOptions, setSelectedOptions] = useState(null);
    const [numberOfTeams, setNumberOfTeams] = useState({value:4, label:4});
    const [competitionStatus, setCompetitionStatus] = useState(false);

    const messageRef = useRef();

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        multiValue: (styles, { data }) => {
          const color = "#4f9cff";
          return {
            ...styles,
            backgroundColor: color,
          };
        },
        multiValueLabel: (styles, { data }) => ({
          ...styles,
          color: data.color,
        }),
        multiValueRemove: (styles, { data }) => ({
          ...styles,
          color: data.color,
          ':hover': {
            backgroundColor: data.color,
            color: 'white',
          },
        }),
      };

    const numberOptions = [
        { value: 4, label: 4 },
        { value: 8, label: 8 }
    ];

    const teamOptions = [
        { value: 1, label: "HELIOS_2010" },
        { value: 2, label: "OPUCI_2D" },
        { value: 3, label: "Agent2D" },
        { value: 4, label: "Axiom" },
        { value: 5, label: "Test" },
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
                                //styles={colourStyles}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="pb-3 mr-0 row">
                <div ref={messageRef} className="error-message">
                </div>
            </div>
            <div className="col-lg-9"></div>
            <input className="btn btn-primary col-lg-3" type="button" value="Start the competition" onClick={handleStart} />
        </div>
    );
}

export default Initiate;