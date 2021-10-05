import React from "react";

import "./QuickStart.scss";

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
            <div>
                <h1>1.How to create an account?</h1>
                <h2>1.1Click on the register button on the top right corner</h2>
                <img src={register1Img} alt=""/>
                <h2>1.2Enter all required information</h2>
                <p>
                    Enter all information needed and click <b>register</b> button to finish the
                    registration.
                </p>
                <img src={register2Img} />
                <h1>2.How to Log in?</h1>
                <h2>2.1 Click on the sign in button on the top right corner</h2>
                <img src={logIn1Img}/>
                <h2>2.2Enter the personal information</h2>
                <p>
                    Enter user name or email address and the password. Then click on{" "}
                    <b>Log in</b> button to finish login.
                </p>
                <img src={logIn2Img} />
                <h1>3.How to watch the live competition and chat with other users online?</h1>
                <h2>3.1 Go to the navigation bar.</h2>
                <p>
                    Click on the <b>live competition</b> button on the top left corner.
                </p>
                <img src={competition1Img} />
                <h2>3.2 Enter the number of participants and select the team</h2>
                <p>
                    Enter the number of participants in the competition and select the team that
                    interests you. After that, click on <b>start the competition</b> button to
                    start watching.
                </p>
                <img src={competition2Img} />
                <img src={competition3Img} />
                <h2>3.3 Type in the text box</h2>
                <p>
                    After the match loads successfully. The right part page is the live chat.
                    Type something in the text box and click <b>send</b> button which is on the
                    lower right corner.
                </p>
                <img src={competition4Img} />
                <h2>3.4 How to find the current competition bracket?</h2>
                <p>
                    3.4.1 Enter any live competition web page Scroll down and you will find the
                    leader board which shows the result of each match as well as the bracket of
                    the competition progress.
                </p>
                <img src={competition5Img} />
                <h1>4.How to watch the past recording?</h1>
                <h2>4.1 Go to the navigation bar.</h2>
                <p>
                    Click on the <b>past recordings</b> button on the top left corner.
                </p>
                <img src={recording1Img} />
                <h2>4.2 Select the competition</h2>
                <p>
                    From the listed competitions, click on <b>arrow</b> button to play the
                    recording of that match, or click <b>download</b> button to download the
                    relative recording.
                </p>
                <img src={recording1Img} />
                <h1>5. How to find each team description and download relative resources?</h1>
                <h2>5.1 Go to the navigation bar</h2>
                <p>
                    Click on the <b>support Teams</b> button in the top left corner.
                </p>
                <img src={supportTeam1Img}/>
                <h2>
                    5.2 click on the <b>download link</b> which is at the bottom of each team
                    description
                </h2>
                <p>
                    Each team has their own logo and a paragraph to introduce its background.
                </p>
                <img src={supportTeam2Img} />
                <p />
            </div>
        );
    }
}

export default QuickStart;