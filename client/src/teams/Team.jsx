import React from "react";
import axios from "axios";

import "./Teams.scss";

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

function Team(props) {
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
        <div className="card-cover col-4 py-3 mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="text-bold">{props.team.teamName}</h5>
                    <p>{props.team.description}</p>
                </div>
                <div className="card-footer text-center">
                    <small>
                        <a href="#" onClick={() => handleDownload(props.team.teamNumber, props.team.teamSource)} rel="noreferrer">
                            <i className="fa fa-download pe-1" />
                            {props.team.teamSource}
                            <br />
                        </a>
                    </small>
                </div>
            </div>
        </div>
    );
}

export default Team;