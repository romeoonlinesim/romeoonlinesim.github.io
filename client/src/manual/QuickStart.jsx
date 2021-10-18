import React from "react";

import "./Manual.scss";

import register1Img from "../img/Register1.png";
import register2Img from "../img/Register2.png";
import logIn1Img from "../img/Login1.png";
import logIn2Img from "../img/Login2.png";
import competition1Img from "../img/Competition6.png";
import competition2Img from "../img/Competition7.png";
import competition3Img from "../img/Competition8.png";
import competition4Img from "../img/Competition9.png";
import competition5Img from "../img/Competition10.png";
import recording1Img from "../img/Recording3.png";
import recording2Img from "../img/Recording4.png";
import supportTeam1Img from "../img/SupportTeam1.png";
import supportTeam2Img from "../img/SupportTeam2.png";

class QuickStart extends React.Component {
    render() {
        return (
            <div className="container-90 container pt-4">
                <div className="wrapper">
                <div className="manual-left">
                        <div className="pb-3">
                            <a className="manual-a" href="#1">1. How to create an account?</a>
                        </div>

                        <div className="pb-3">
                            <a className="manual-a" href="#2">2. How to Log in?</a>
                        </div>

                        <div className="pb-3">
                            <a className="manual-a" href="#3">3. How to watch the live competition and chat with other users online?</a>
                        </div>

                        <div className="pb-3">
                            <a className="manual-a" href="#4">4. How to watch the past recording?</a>
                        </div>

                        <div className="pb-3">
                            <a className="manual-a" href="#5">5. How to find each team description and download relative resources?</a>
                        </div>
                    </div>
                    
                    <div className="manual-right">
                        <h2 id="1" className="manual-header text-danger pb-2">1. How to create an account?</h2>
                        <h3 className="manual-header pb-2">1.1 Click on the register button on the top right corner</h3>
                        <img className="pb-4" src={register1Img} alt=""/>
                        <h3 className="manual-header pb-2">1.2 Enter all required information</h3>
                        <p className="pb-2">
                            Enter all information needed and click <b>register</b> button to finish the
                            registration.
                        </p>
                        <img className="pb-4" src={register2Img} />

                        <h2 id="2" className="manual-header text-danger pb-2">2. How to Log in?</h2>
                        <h3 className="manual-header pb-2">2.1 Click on the sign in button on the top right corner</h3>
                        <img className="pb-4" src={logIn1Img}/>
                        <h3 className="manual-header pb-2">2.2 Enter the personal information</h3>
                        <p className="pb-2">
                            Enter user name or email address and the password. Then click on{" "}
                            <b>Log in</b> button to finish login.
                        </p>
                        <img className="pb-4" src={logIn2Img} />

                        <h2 id="3" className="manual-header text-danger pb-2">3. How to watch the live competition and chat with other users online?</h2>
                        <h3 className="manual-header pb-2">3.1 Go to the navigation bar.</h3>
                        <p className="pb-2">
                            Click on the <b>live competition</b> button on the top left corner.
                        </p>
                        <img className="pb-4" src={competition1Img} />
                        <h3 className="manual-header pb-2">3.2 Enter the number of participants and select the team</h3>
                        <p className="pb-2">
                            Enter the number of participants in the competition and select the team that
                            interests you. After that, click on <b>start the competition</b> button to
                            start watching.
                        </p>
                        <img className="pb-4" src={competition2Img} />
                        <img className="pb-4" src={competition3Img} />
                        <h3 className="manual-header pb-2">3.3 Type in the text box</h3>
                        <p className="pb-2">
                            After the match loads successfully. The right part page is the live chat.
                            Type something in the text box and click <b>send</b> button which is on the
                            lower right corner.
                        </p>
                        <img className="pb-4" src={competition4Img} />
                        <h3 className="manual-header pb-4">3.4 How to find the current competition bracket?</h3>
                        <p className="pb-2">
                            3.4.1 Enter any live competition web page Scroll down and you will find the
                            leader board which shows the result of each match as well as the bracket of
                            the competition progress.
                        </p>
                        <img className="pb-4" src={competition5Img} />

                        <h2 id="4" className="manual-header text-danger pb-2">4. How to watch the past recording?</h2>
                        <h3 className="manual-header pb-2">4.1 Go to the navigation bar.</h3>
                        <p className="pb-2">
                            Click on the <b>past recordings</b> button on the top left corner.
                        </p>
                        <img className="pb-4" src={recording1Img} />
                        <h3 className="manual-header pb-2">4.2 Select the competition</h3>
                        <p className="pb-2">
                            From the listed competitions, click on <b>arrow</b> button to play the
                            recording of that match, or click <b>download</b> button to download the
                            relative recording.
                        </p>
                        <img className="pb-4" src={recording1Img} />

                        <h2 id="5" className="manual-header text-danger pb-2">5. How to find each team description and download relative resources?</h2>
                        <h3 className="manual-header pb-2">5.1 Go to the navigation bar</h3>
                        <p className="pb-2">
                            Click on the <b>support Teams</b> button in the top left corner.
                        </p>
                        <img className="pb-4" src={supportTeam1Img}/>
                        <h3 className="manual-header pb-2">
                            5.2 Click on the <b>download link</b> which is at the bottom of each team
                            description
                        </h3>
                        <p className="pb-2">
                            Each team has their own logo and a paragraph to introduce its background.
                        </p>
                        <img className="pb-4 manual-img" src={supportTeam2Img} />
                        <p />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default QuickStart;