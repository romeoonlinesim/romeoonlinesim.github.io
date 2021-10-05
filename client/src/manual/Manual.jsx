import React from "react";
import { NavLink } from "react-router-dom";

import "./Manual.scss";

import background from "../img/bg-1.png";
import secondBackground from "../img/robocup-1.png";

import homepageImg from "../img/HomePage.jpg";
import registerImg from "../img/Register.jpg";
import signInImg from "../img/SignIn.jpg";
import navigationBarImg from "../img/NavigationBar.jpg";
import competition1Img from "../img/Competition1.jpg";
import competition2Img from "../img/Competition2.jpg";
import competition3Img from "../img/Competition3.jpg";
import competition4Img from "../img/Competition4.jpg";
import competition5Img from "../img/Competition5.jpg";
import recording1Img from "../img/Recording1.jpg";
import recording2Img from "../img/Recording2.jpg";
import supportTeamImg from "../img/SupportTeam.jpg";

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;
class Manual extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className=" container-90 container pt-4">
                <div className="wrapper">
                    <div className="manual-left">
                        <div className="pb-3">
                            <i className="fa fa-home text-primary manual-sidebar manual-i"/>
                            <a className="manual-a" href="#homepage">Home Page</a>
                        </div>

                        <div className="pb-3">
                            <i className="fa fa-user-plus  text-primary manual-sidebar manual-i" />
                            <a className="manual-a" href="#register">Register</a>
                        </div>

                        <div className="pb-3">
                            <i className="fa fa-sign-in  text-primary manual-sidebar manual-i" />
                            <a className="manual-a" href="#SignIn">Sign In</a>
                        </div>

                        <div className="pb-3">
                            <i className="fa fa-question-circle text-primary manual-sidebar manual-i" />
                            <a className="manual-a" href="#navigation">Navigation Bar</a>
                        </div>

                        <div className="pb-3">
                            <i className="fa fa-wpexplorer text-primary manual-sidebar manual-i"/>
                            <a className="manual-a" href="#liveCompetition">Live Competition</a>
                        </div>

                        <div className="pb-3">
                           <i className="fa fa-star-o text-primary manual-sidebar manual-i" />
                            <a className="manual-a" href="#PastRecording">Past Recording</a>
                        </div>

                        <div className="pb-3">
                            <i className="fa fa-group text-primary manual-sidebar manual-i" />
                            <a className="manual-a" href="#SupportTeam">Support Teams</a>
                        </div>

                    </div>
                    <div className="manual-right">
                        

                        <div className="row">
                            <h2 id="homepage">Homepage</h2>
                            <img className="manual-img" src={homepageImg} />
                            <ul className="manual-list">
                                <li>
                                <p>
                                    {" "}
                                    The homepage of Romeo online simulator consists of various
                                    components. There are two buttons sign in and register on
                                    the top right corner. Every new user needs to register a new
                                    account then sign in to start using our system.{" "}
                                </p>
                                </li>
                                <li>
                                <p>
                                    Additionally, there are two buttons join today and contact
                                    us at the bottom of the homepage. The join today button is
                                    prompt user to register and sign in to start using our
                                    online simulator. The contact us button is offering user the
                                    chance to contact us privately for any suggestions or help.{" "}
                                </p>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <h2 id="register">Register</h2>
                            <img className="manual-img" src={registerImg} />
                            <ul className="manual-list">
                                <li>
                                <p>
                                    When user clicks register, it will show the user such
                                    interface. Users need to enter the username, email address
                                    and password to create a new account. Once the user enters
                                    all required information, they can click register button to
                                    finish it.{" "}
                                </p>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <h2 id="SignIn">Sign in</h2>
                            <img className="manual-img" src={signInImg} />
                            <ul className="manual-list">
                                <li>
                                <p>
                                    After user already registers an account successfully,
                                    they can click the sign in button to jump to a
                                    new page which will ask user to enter such information.
                                    After the user enters all information, they can click the log
                                    in button to finish it.{" "}
                                </p>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <h2 id="navigation">Navigation bar</h2>
                            <img className="manual-img" src={navigationBarImg} />
                            <ul className="manual-list">
                                <li>
                                    <p>
                                        On the top left corner and the bottom of the home page,
                                        there are five options for user which are Home, Live
                                        Competition, Past Recordings, Support Teams and User Manual.{" "}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        By clicking the home button, the user will jump to the home
                                        page. 
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        By clicking the Live Competition button, the user will
                                        be redirected to the competition page. If there is no
                                        ongoing competition, the user can choose the number of
                                        participants and the specific participant teams to start a
                                        new competition. Otherwise, if there is an ongoing live
                                        competition, the user will be able to watch the current
                                        ongoing match in the competition.{" "}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        By clicking the Past Recordings button, the user can watch
                                        the past competition’s matches and download the recording.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        By clicking the Support Teams button, the user can find the
                                        information like the background of each team and download
                                        the relative resources from each team.{" "}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        By clicking the User Manual button, the user can find the
                                        instructions given in User Manual page.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <h2 id="liveCompetition">Live Competition</h2>
                            <img className="manual-img" src={competition1Img} />
                            <img className="manual-img" src={competition2Img} />
                            <ul className="manual-list">
                                <li>
                                    <p>
                                        When user clicks Live Competition button, if there is no
                                        ongoing competition, the webpage will show the above
                                        interface. It will ask user to enter
                                        the number of participants and choose any teams that they
                                        prefer.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        In addition, the user can choose random teams by pressing
                                        the dice icon next to “Participants:” label. After that, the
                                        user can click Start the competition button. If there are
                                        any errors related to the number of participants chosen,
                                        that error will be displayed above the button and a warning
                                        will be displayed by the browser.{" "}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        After that, the page will be reloaded for live competition
                                        stream.
                                    </p>
                                </li>
                            </ul>
                            <img className="manual-img" src={competition3Img} />
                            <ul className="manual-list">
                                <li>
                                    <p>
                                        The above image shows the live competition wait for match. When
                                        the users wait for the match, they can send message and
                                        interact with other users in the public live chat by
                                        entering text in the text field and click send button to
                                        send the message.{" "}
                                    </p>
                                </li>
                            </ul>
                            <img className="manual-img" src={competition4Img}/>
                            <ul className="manual-list">
                                <li>
                                    <p>
                                        Right below the live competition stream, there is a leaderboard 
                                        that shows the result of each match as well as the
                                        bracket as the competition progress.
                                    </p>
                                </li>
                            </ul>
                            <img className="manual-img" src={competition5Img} />
                            <ul>
                                <li>
                                    <p>
                                        The above figure shows current match running after the match loads
                                        successfully. There are 11 players in each team. The
                                        players are presented by different colour (yellow and
                                        blue).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        In addition, the goalkeeper has different colour in order to
                                        help users to easily identify them.{" "}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <h2 id="PastRecording">Past Recordings</h2>
                            <img className="manual-img" src={recording1Img} />
                            <ul className="manual-list">
                                <li>
                                    <p>
                                        When user clicks Past Recordings button, the system will
                                        show the above interface. Each competition
                                        contains two rounds or three rounds depends on the number of
                                        participants in each competition.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        The user can play the recording of each round by clicking
                                        the arrow icon or click the download icon to download the
                                        log file of any competition they are interested in.{" "}
                                    </p>
                                </li>
                            </ul>
                            <img className="manual-img" src={recording2Img} />
                            <ul className="manual-list">
                                <li>
                                <p>
                                    The above image shows the playback interface after user clicks the play
                                    recording icon. The same virtual field as the live
                                    competition will be called.{" "}
                                </p>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <h2 id="SupportTeam">Support Teams</h2>
                            <img className="manual-img" src={supportTeamImg} />
                            <ul className="manual-list">
                                <li>
                                    <p>
                                        The above interface shows up after user clicks the support teams’
                                        button. The webpage shows the user all teams’ details like
                                        the background and the logo of each team. However, due to some teams
                                        do not have a logo attached with their package, their logos will be
                                        changed to a placeholder image.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        At the bottom of each team description, there is a link that
                                        user can click to download the related resources for each
                                        team.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Manual;