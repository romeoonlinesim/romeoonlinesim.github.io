import React from "react";

import Chat from "./Chat";
import Field from "./Field";
import "./Competition.scss";

class Competition extends React.Component {
    render() {
        const {authenticated} = this.props;
        const {user} = this.props;

        return (
            <div className="competition container">
                <div className="row">
                    <div className="col-lg-8">
                        <Field />
                    </div>
                    <div className="col-lg-1" />
                    <Chat authenticated={authenticated} user={user}/>
                    {/*<div className="col-lg-3 chat-box">
                        <div className="row chat-header">
                            <h5 className="pt-1">Live Chat</h5>
                        </div>
                        <div className="row chat">
                            <div className="pb-2 pt-1">
                                <label>User1:</label>
                                Chat 1
                            </div>
                            <div className="pb-2 pt-1">
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
                    </div>*/}
                </div>
                <div className="row">
                    <div className="brackets" id="brackets" />
                </div>
            </div>
        );
    }
}

export default Competition;