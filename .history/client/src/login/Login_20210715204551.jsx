import React from "react";
import "./Login.scss";

class Login extends React.Component {
    render() {
        return (
            <div className="container col-lg-4">
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
                        <a style={{verticalAlign: 'middle', display: 'table-cell'}} href="register.html">Don't have an account yet? Sign up here</a>
                    </div>
                    <input id="loginButton" type="button" className="btn btn-primary" defaultValue="Log In" />
                    </div>
                </div>
                <div className="col-lg-2" />
                </div>
                <div className="row p-3" />
            </div>
        );
    }
}

export default Login;