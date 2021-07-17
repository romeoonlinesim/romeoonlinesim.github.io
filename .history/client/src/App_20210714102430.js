import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import "./App.scss";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import background from "./img/background.jpg";
import secondBackground from "./img/robocup-1.png";

const host = "http://localhost:3000";

function App() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState();

  const socketRef = useRef();
  const messagesEnd = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", data => {
      setId(data);
    });

    socketRef.current.on("sendDataServer", dataGot => {
      //if there are new messages, mess will be re-rendered 
      setMess(oldMsgs => [...oldMsgs, dataGot.data]);
      scrollToBottom();
    });


    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message !== null) {
      const msg = {
        content: message,
        id: id
      }

      socketRef.current.emit("sendDataClient", msg);
      setMessage();
    }
  }

  const renderMess = mess.map((m, index) =>
    <div key={index} className={`${m.id === id ? 'your-message' : 'other-people'} chat-item`}>
      {m.content + m.id}    
    </div>
  );

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      sendMessage();
    }
  }

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div data-bss-parallax-bg="true" className="backgroundimages" style={{backgroundImage: 'url(assets/img/bg-1.png)', backgroundPosition: 'center', backgroundSize: 'cover'}} />
        </div>
        <div className="row">
          
          <img className="img col-lg-6" src={secondBackground} alt="Background" />
          <div className="text col-lg-6 ">
            <h3 className="grid-item">RoboCup</h3>
            <p className="grid-item">The RoboCup server Simulator is a research and educational tool for multiagent systems and artificial intelligence. The aim of the RoboCup is to present a new standard problem for AI and robotics. There are two teams of eleven simulated autonomous robotic players playing soccer on the platform. These players (Also called agents) can play the game with one or some different strategies. </p>
          </div>
        </div>
        <div className="row grey">
          <div className="row" />
          <div className="col-lg-6">
            <p className="para">Wanna inspect your own league?</p>
            <p className="para">Login to start tournament!</p>
          </div>
          <div className="col-lg-6 row">
            <div className="row" />
            <div className="col-lg-3" />
            <button id="join_today" type="button" className="btn btn-primary col-lg-3">Join Today</button>
            <div className="col-lg-1" />
            <button type="button" className="btn btn-outline-primary col-lg-3">Contact Us</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// <img className="background-img" src={background} alt="Background" />
//<p className="watermark">Welcome to <br /> Romeo <br /> Online Simulator</p>

  /*return (
    <div>

    
    <Navbar />
    <div class="box-chat">
    <div class="box-chat_message">
        {renderMess}
        <div style={{ float:"left", clear: "both" }}
              ref={messagesEnd}>
          </div>
    </div>

    <div class="send-box">
        <textarea 
          value={message}  
          onKeyDown={onEnterPress}
          onChange={handleChange} 
          placeholder="Enter your message ..." 
        />
        <button onClick={sendMessage}>
          Send
        </button>
    </div>
  </div>
  </div>);*/

export default App;