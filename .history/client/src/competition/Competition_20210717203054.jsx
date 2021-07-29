import React from "react";

import "./Competition.scss";

import "../img/field-picture-1";

class Competition extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <img className="background-img" src="img/field-picture-1.png" />
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-3 chat-box">
                    <div className="row chat-header">
                        <h4 className="pt-1">Live Chat</h4>
                    </div>
                    <div className="row chat">
                        <div className="pb-2 pt-1">
                        <label>User1:</label>
                        Chat 1
                        </div>
                        <div className="pb-2">
                        <label>User2:</label>
                        Chat 2
                        </div>
                    </div>
                    <div className="row chat-input pt-3 pb-3">
                        <div className="col-lg-1" />
                        <input className="col-lg-10 chat-text" type="textarea" name="chat" placeholder="Type something" />
                        <div className="col-lg-1" />
                    </div>
                    <div className="row d-flex">
                        <div className="col-lg-8" />
                        <input type="button" className="btn btn-primary col-lg-3" defaultValue="Send" />
                        <div className="col-lg-1" />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="brackets" id="brackets" />
                </div>
            </div>
        );
    }
}

export default Competition;