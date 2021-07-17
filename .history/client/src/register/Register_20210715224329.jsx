import React from "react";

import "./Register.scss";

class Register extends React.Component {
    render() {
        return (
            <div className="container col-lg-4">
                <div className="row p-3" />
                <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                    <h3 className="pb-4">Sign up for a free account</h3>
                    <div className="pb-3">
                    <input id="username" type="text" className="input-others" name="username" placeholder="Username" />
                    </div>
                    <div className="pb-3">
                    <input type="text" className="input-others" name="email" placeholder="Email Address" />
                    </div>
                    <div className="pb-3">
                    <input id="password" type="password" className="input-others" name="password" placeholder="Your Password" />
                    </div>
                    <meter max={4} id="password-strength-meter" className="no-display" />
                    <div className="pb-3">
                    <input type="password" className="input-others" name="cpassword" placeholder="Confirm Password" />
                    </div>
                    <div className="d-flex">
                    <div className="already">
                        <a style={{verticalAlign: 'middle', display: 'table-cell'}} href="login.html">Already have an account? Sign in here</a>
                    </div>
                    <input id="registerButton" type="button" className="btn btn-primary" defaultValue="Register" />
                    </div>
                </div>
                <div className="col-lg-2" />
                </div>
                <div className="row p-3" />
            </div>
        );
    }
}

export default Register;