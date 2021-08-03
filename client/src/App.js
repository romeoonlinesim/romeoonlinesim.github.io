import React from "react";

import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Main from "./router/Main"

import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.scss";

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      user: undefined
    }
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    fetch(BACKEND_URL + "/authenticate", {credentials: "include"})
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          authenticated: result.authenticated,
          user: result.user
        });
      },
      (error) => {
        console.log(error);
        console.log("error fetching");
      }
    );
  }

  handleLogout() {
    fetch(BACKEND_URL + "/logout", {credentials: "include"})
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                authenticated: result.authenticated,
                user: result.user
              });
              },
              (error) => {
                console.log("error fetching");
              }
        );
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render () {
    const {authenticated} = this.state;
    const {user} = this.state;

    return (
      <div>
        <Navbar authenticated={authenticated} user={user} handleLogout={this.handleLogout} />
        <Main authenticated={authenticated} user={user} />
        <Footer />
      </div>
    );
  }
}

export default App;