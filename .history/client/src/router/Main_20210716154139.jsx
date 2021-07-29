import { Route, Switch } from "react-router-dom";

import Home from "./home/Home";;
import Competition from "./competition/Competition";
import Recordings from "./recordings/Recordings";
import Teams from "./teams/Teams";
import Login from "./login/Login";
import Register from "./register/Register";

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/competition" component={Competition}></Route>
            <Route exact path="/recordings" component={Recordings}></Route>
            <Route exact path="/teams" component={Teams}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
        </Switch>
    );
}
    