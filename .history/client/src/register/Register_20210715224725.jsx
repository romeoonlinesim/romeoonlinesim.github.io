import React from "react";

import "./Register.scss";

const BACKEND_URL = "http://localhost:3000";

class Register extends React.Component {
    strength = {
        0: "Worst",
        1: "Bad",
        2: "Weak",
        3: "Good",
        4: "Strong"
    }

    password = document.getElementById("password");
    meter = document.getElementById('password-strength-meter');

    password.addEventListener('input', function() {
        var val = password.value;
        var result = zxcvbn(val);

        if (val != null) {
            meter.style.display = "block";
        } else
            meter.style.display = "none";

        // Update the password strength meter
        meter.value = result.score;

    });

    render() {
        return (
            <form action={BACKEND_URL + "/verifyRegister"} method="POST">
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
                        <input id="registerButton" type="submit" className="btn btn-primary" defaultValue="Register" />
                    </div>
                </div>
                <div className="col-lg-2" />
                </div>
                <div className="row p-3" />
            </div>
            </form>
        );
    }
}

export default Register;