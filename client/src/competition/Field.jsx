import React, {useEffect, useRef, useState} from "react";
import socketIOClient from "socket.io-client";

import "./Competition.scss";

function Field(props) {

    const BACKEND_URL = process.env.REACT_APP_SERVER_URL;
    const canvasOriginalWidth = 640;

    let [currentScore, setCurrentScore] = useState("");
    let [currentTime, setCurrentTime] = useState("");
    let [score, setScore] = useState("");
    let [canvasState, setCanvasState] = useState(true);

    let [liveCheck, setLiveCheck] = useState(true);

    

    const canvasRef = useRef();
    const scoreRef = useRef();

    const draw = (pool, time) => {
        if (canvasRef.current === null) {
            setCanvasState(false);
            return;
        }
        var count = 0;
        var canvas = canvasRef.current;
        
        var ctx = canvas.getContext('2d');
        var scale = (window.innerWidth)/(canvasOriginalWidth);
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = ctx.canvas.width/640*480;
      
    
        // Outer lines
        ctx.beginPath();
        ctx.rect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "#060";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        ctx.closePath();
        // Mid line
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
        ctx.closePath();
        
        //Mid circle
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 73*scale, 0, 2*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Mid point
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 2*scale, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();
        
        //Home penalty box
        ctx.beginPath();
        ctx.rect(0, (canvas.height - 322*scale) / 2, 132*scale, 322*scale);
        ctx.stroke();
        ctx.closePath();
        //Home goal box
        ctx.beginPath();
        ctx.rect(0, (canvas.height - 146*scale) / 2, 44*scale, 146*scale);
        ctx.stroke();
        ctx.closePath();
        //Home goal 
        ctx.beginPath();
        ctx.moveTo(1*scale, (canvas.height / 2) - 45*scale);
        ctx.lineTo(1*scale, (canvas.height / 2) + 45*scale);
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.closePath();

        ctx.lineWidth = 1;

        //Home penalty point
        ctx.beginPath()
        ctx.arc(88*scale, canvas.height / 2, 1*scale, 0, 2*Math.PI, true);
        ctx.fill();
        ctx.closePath();
        //Home half circle
        ctx.beginPath()
        ctx.arc(88*scale, canvas.height / 2, 73*scale, 0.29*Math.PI, 1.71*Math.PI, true);
        ctx.stroke();
        ctx.closePath();
        
        //Away penalty box
        ctx.beginPath();
        ctx.rect(canvas.width-132*scale, (canvas.height - 322*scale) / 2, 132*scale, 322*scale);
        ctx.stroke();
        ctx.closePath();
        //Away goal box
        ctx.beginPath();
        ctx.rect(canvas.width-44*scale, (canvas.height - 146*scale) / 2, 44*scale, 146*scale);
        ctx.stroke();
        ctx.closePath();      
        //Away goal 
        ctx.beginPath();
        ctx.moveTo(canvas.width-1*scale, (canvas.height / 2) - 45*scale);
        ctx.lineTo(canvas.width-1*scale, (canvas.height / 2) + 45*scale);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;
        //Away penalty point
        ctx.beginPath()
        ctx.arc(canvas.width-88*scale, canvas.height / 2, 1*scale, 0, 2*Math.PI, true);
        ctx.fill();
        ctx.closePath();
        //Away half circle
        ctx.beginPath()
        ctx.arc(canvas.width-88*scale, canvas.height / 2, 73*scale, 0.71*Math.PI, 1.29*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
            
        //Home L corner
        ctx.beginPath()
        ctx.arc(0, 0, 8*scale, 0, 0.5*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Home R corner
        ctx.beginPath()
        ctx.arc(0, canvas.height, 8*scale, 0, 2*Math.PI, true);
        ctx.stroke();
        ctx.closePath();
        //Away R corner
        ctx.beginPath()
        ctx.arc(canvas.width, 0, 8*scale, 0.5*Math.PI, 1*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Away L corner
        ctx.beginPath()
        ctx.arc(canvas.width, canvas.height, 8*scale, 1*Math.PI, 1.5*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        
        //drawing
        pool.forEach(element => {
            var pos = element.split(",");
            
            var a = (parseFloat(pos[0])*320/52.5+320)*scale;
            var b = (parseFloat(pos[1])*229/34+229)*scale;
        
            //ball
            if(count === 0){ 
                ctx.beginPath();   
                ctx.strokeStyle ="#ffffff";
                ctx.arc(a,b,6*scale,0,2*Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();  
                ctx.fillStyle ="#ffffff";
                ctx.arc(a,b,1.5*scale,0,2*Math.PI);
                ctx.fill();
                ctx.stroke();         
            } else {
                if (count === 1) { //left goalie
                ctx.fillStyle = "#1DF008";
            } else if (count === 12){ //right goalie
                ctx.fillStyle = "#F008DB";
            }
            else if(count <= 11){
                ctx.fillStyle = "#E6D71A";
            } else{//player
                ctx.fillStyle = "#1A39E6";
            }
            ctx.beginPath();   
            ctx.strokeStyle ="#000000";       
            ctx.arc(a,b,7*scale,0,2*Math.PI);
            ctx.fill();
            ctx.stroke(); 
            ctx.beginPath(); 
            ctx.arc(a,b,2.5*scale,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();         
            ctx.fillStyle = "#ffffff";
            
            let fontsize = 15*scale;
            ctx.font = fontsize + "px Arial";
            if (count <= 11) 
                ctx.fillText(count, a+6*scale, b);
            else
                ctx.fillText(count-11, a+6*scale, b+3*scale);
            }       
            
            count ++; 
       }); 
    }

    const displayErrorMessage = (message) => {
        var canvas = canvasRef.current;
        var ctx = canvas.getContext('2d');
        var scale = (window.innerWidth)/(canvasOriginalWidth);
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = ctx.canvas.width/640*480;
    
        // Outer lines
        // Outer lines
        ctx.beginPath();
        ctx.rect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "#060";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        ctx.closePath();
        // Mid line
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
        ctx.closePath();
        
        //Mid circle
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 73*scale, 0, 2*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Mid point
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 2*scale, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();
        
        //Home penalty box
        ctx.beginPath();
        ctx.rect(0, (canvas.height - 322*scale) / 2, 132*scale, 322*scale);
        ctx.stroke();
        ctx.closePath();
        //Home goal box
        ctx.beginPath();
        ctx.rect(0, (canvas.height - 146*scale) / 2, 44*scale, 146*scale);
        ctx.stroke();
        ctx.closePath();
        //Home goal 
        ctx.beginPath();
        ctx.moveTo(1*scale, (canvas.height / 2) - 45*scale);
        ctx.lineTo(1*scale, (canvas.height / 2) + 45*scale);
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.closePath();

        ctx.lineWidth = 1;

        //Home penalty point
        ctx.beginPath()
        ctx.arc(88*scale, canvas.height / 2, 1*scale, 0, 2*Math.PI, true);
        ctx.fill();
        ctx.closePath();
        //Home half circle
        ctx.beginPath()
        ctx.arc(88*scale, canvas.height / 2, 73*scale, 0.29*Math.PI, 1.71*Math.PI, true);
        ctx.stroke();
        ctx.closePath();
        
        //Away penalty box
        ctx.beginPath();
        ctx.rect(canvas.width-132*scale, (canvas.height - 322*scale) / 2, 132*scale, 322*scale);
        ctx.stroke();
        ctx.closePath();
        //Away goal box
        ctx.beginPath();
        ctx.rect(canvas.width-44*scale, (canvas.height - 146*scale) / 2, 44*scale, 146*scale);
        ctx.stroke();
        ctx.closePath();      
        //Away goal 
        ctx.beginPath();
        ctx.moveTo(canvas.width-1*scale, (canvas.height / 2) - 45*scale);
        ctx.lineTo(canvas.width-1*scale, (canvas.height / 2) + 45*scale);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;
        //Away penalty point
        ctx.beginPath()
        ctx.arc(canvas.width-88*scale, canvas.height / 2, 1*scale, 0, 2*Math.PI, true);
        ctx.fill();
        ctx.closePath();
        //Away half circle
        ctx.beginPath()
        ctx.arc(canvas.width-88*scale, canvas.height / 2, 73*scale, 0.71*Math.PI, 1.29*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
            
        //Home L corner
        ctx.beginPath()
        ctx.arc(0, 0, 8*scale, 0, 0.5*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Home R corner
        ctx.beginPath()
        ctx.arc(0, canvas.height, 8*scale, 0, 2*Math.PI, true);
        ctx.stroke();
        ctx.closePath();
        //Away R corner
        ctx.beginPath()
        ctx.arc(canvas.width, 0, 8*scale, 0.5*Math.PI, 1*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Away L corner
        ctx.beginPath()
        ctx.arc(canvas.width, canvas.height, 8*scale, 1*Math.PI, 1.5*Math.PI, false);
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = "#ffffff";
        let fontsize = 15*scale;
        ctx.font = fontsize + "px Arial";
        const textWidth = ctx.measureText(message).width;
        ctx.fillText(message, (canvas.width/2) - (textWidth/2), 100);
    }

    const start = () => {
            fetch(`${BACKEND_URL}/competition/live`, {credentials: "include"})
            .then(res => res.json())
            .then(resBody => {
                if (resBody.ongoing === false) {
                    displayErrorMessage(resBody.message);
                } else {
                    readTextFile(resBody.cycle);
                }
            });
        
    }
    
    const readTextFile = (index) => {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", BACKEND_URL + "/competition/liveMatch", false);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status === 0) {
                    var allText = rawFile.responseText.split("\n");
                    if (index >= allText.length) {
                        
                    } else {
                        //get current score first
                        var temp = 0;
                        while (temp < index) {
                            var line = allText[temp].split(" ");
                            if (line.length === 6) {
                                const team1 = line[2];
                                const team2 = line[3];
                                const goal1 = line[4];
                                const goal2 = line[5];
                                setCurrentScore(team1 +  " " + goal1 + " - " + goal2 + " " + team2);
                            } else if (line.length === 10) {
                                const team1 = line[2];
                                const team2 = line[3];
                                const goal1 = line[4];
                                const goal2 = line[5];
                                const pen1 = line[6];
                                const pen2 = line[8];
                                setCurrentScore(team1 +  " " + goal1 + " (" + pen1 + ") - (" + pen2 + ") " + goal2 + " " + team2);
                            }
                            temp++;
                        }

                        var time = index;
                        var print = setInterval(function() { 
                            var line = allText[index].split(" ");
                            if(line.length === 6){
                                const team1 = line[2];
                                const team2 = line[3];
                                const goal1 = line[4];
                                const goal2 = line[5];
                                time--; //reduce time by 1
                                setCurrentScore(team1 +  " " + goal1 + " - " + goal2 + " " + team2);
                            } else if(line.length === 10){
                                const team1 = line[2];
                                const team2 = line[3];
                                const goal1 = line[4];
                                const goal2 = line[5];
                                const pen1 = line[6];
                                const pen2 = line[8];
                                time--; //reduce time by 1
                                setCurrentScore(team1 +  " " + goal1 + " (" + pen1 + ") - (" + pen2 + ") " + goal2 + " " + team2);
                            }
                            
                            draw(line, time);
                            setCurrentTime(time);

                            time++;
                            index++;
                            if (canvasState === false) {
                                setLiveCheck(false);
                                clearInterval(print);
                            }
                            if (index === allText.length) {
                                setLiveCheck(false);
                                clearInterval(print);
                            }
                                
                        }, 100);
                    }
                    
                }
            }
        }
        rawFile.send(null);
        //try to get new match after finishing the current one
    }

    useEffect(() => {
        const socket = socketIOClient.connect(BACKEND_URL.slice(0,-4), {
            path: "/api/socket"
        });
        socket.on("liveCheckSocket", function(liveCheck) {
            setLiveCheck(liveCheck);
        });

        return function cleanup() {
            socket.off("liveCheckSocket");
            setCanvasState(false);
        }
    }, []);

    useEffect(() => {
        if (liveCheck === true) {
            setTimeout(props.updateBrackets(), 5000);           
            start();
        }
    }, [liveCheck]);

    useEffect(() => {
        setScore(currentScore + " " + currentTime);
    }, [currentTime]);
    

    return(
        <div className="col-lg-8 field-container">
            <div className="score-display"
                ref={scoreRef}>
                    {score}
            </div>
            <canvas className="canvas-field" 
                ref={canvasRef}
                width="640"
                />
        </div>
    );

}

export default Field;