import React from "react";
import "./Login.scss";

class Login extends React.Component {
    state = {
        user: {},
        error: null,
        authenticated: false
    };

    componentDidMount() {
        fetch("http://localhost:3000/login", {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
        .then(response => {
            if (response.status === 200) return response.json();
            throw new Error("Failed to log in");
        })
        .then(responseJson => {
            this.setState({
                authenticated: true,
                user: responseJson.user
            });
        })
        .catch(error => {
            this.setState({
                authenticated: false,
                error: "Failed to authenticate user"
            });
        });
    }

    render() {
        return (
            <form action="/verifyLogin" method="post">
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