import React, {useEffect, useRef, useState} from "react";
import ToolTip from "@material-ui/core/Tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import zxcvbn from "zxcvbn";
import {NavLink} from "react-router-dom";

import "./Register.scss";

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameValidation, setUsernameValidation] = useState(true);
    const [emailValidation, setEmailValidation] = useState(true);
    const [confirmValidation, setConfirmValidation] = useState(true);

    const [validation, setValidation] = useState(true);

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    const colorRef = useRef();
    const passwordRef = useRef();

    const strength = {
        0: "Worst",
        1: "Bad",
        2: "Weak",
        3: "Good",
        4: "Strong"
    }

    const validate = (e) => {
        if (username === "") {
            setValidation(false);
            setUsernameValidation(false);
        }

        if (!validEmail.test(email)) {
            setValidation(false);
            setEmailValidation(false);
        }

        if (password !== confirmPassword) {
            setValidation(false);
            setConfirmValidation(false);
        }

        if (validation === false) {
            e.preventDefault();
            return;
        }

        setValidation(true);
    }

    useEffect(() => {
        let meter = colorRef.current;

        var result = zxcvbn(password);

        if (password != null) {
            meter.style.display = "block";
        } else
            meter.style.display = "none";

        // Update the password strength meter
        meter.value = result.score;
    }, [password]);

    

    return (
        <form action={BACKEND_URL + "/verifyRegister"} method="POST">
        <div className="container center col-lg-4">
            <div className="row p-3" />
            <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-8">
                <h3 className="pb-4">Sign up for a free account</h3>
                <div className="pb-3">
                    <input id="username" type="text" className="input-others" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <ToolTip title="Username cannot be empty" className={usernameValidation === true ? "no-display" : ""}>
                        <a>
                            <FontAwesomeIcon icon={faExclamationCircle}  className="warning-icon" />
                        </a>
                    </ToolTip>
                </div>
                <div className="pb-3">
                    <input type="text" className="input-others" name="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                    <ToolTip title="Invalid email" className={emailValidation === true ? "no-display" : ""}>
                        <a>
                            <FontAwesomeIcon icon={faExclamationCircle}  className="warning-icon" />
                        </a>
                    </ToolTip>
                </div>
                <div className="pb-3">
                    <input ref={passwordRef} id="password" type="password" className="input-others" name="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <meter ref={colorRef} max={4} id="password-strength-meter" className="no-display" />
                <div className="pb-3">
                    <input type="password" className="input-others" name="cpassword" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <ToolTip title="Password confirmation does not match" className={confirmValidation === true ? "no-display" : ""}>
                        <a>
                            <FontAwesomeIcon icon={faExclamationCircle}  className="warning-icon" />
                        </a>
                    </ToolTip>
                </div>
                <div className="d-flex">
                    <div className="already">
                        <NavLink exact to={{pathname: "/login"}}>
                            Already have an account? Sign in here
                        </NavLink>
                        
                    </div>
                    <input id="registerButton" type="submit" className="btn btn-primary" value="Register" onClick={validate} />
                </div>
            </div>
            <div className="col-lg-2" />
            </div>
            <div className="row p-3" />
        </div>
        </form>
    );
}

export default Register;