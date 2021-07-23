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
                </div>
                <div className="row">
                    <div className="brackets" id="brackets" />
                </div>
            </div>
        );
    }
}

export default Competition;