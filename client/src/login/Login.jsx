import React from "react";
import "./Login.scss";
import {NavLink} from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

class Login extends React.Component {
    state = {
        user: {},
        error: null,
        authenticated: false
    };

    render() {
        return (
            <form action={BACKEND_URL + "/verifyLogin"} method="post">
                <div className="container center col-lg-4">
                    <div className="row p-3" />
                    <div className="row">
                        <div className="col-lg-2" />
                        <div className="col-lg-8">
                            <h3 className="pb-4">Login</h3>
                            <div className="pb-4">
                                <input id="email" type="text" className="input-others" name="email" placeholder="Username or Email Address" />
                            </div>
                            <div className="pb-4">
                                <input id="password" type="password" className="input-others" name="password" placeholder="Your Password" />
                            </div>
                            <div className="d-flex">
                                <div className="already">
                                    <NavLink exact to={{pathname: "/register"}}>
                                        Don't have an account yet? Sign up here
                                    </NavLink>
                                </div>
                                <input id="loginButton" type="submit" className="btn btn-primary" value="Log In" />
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

export default Login;