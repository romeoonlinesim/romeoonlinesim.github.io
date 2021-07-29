import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";


import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Main from "./router/Main"


import "./App.scss";

const BACKEND_URL = "http://localhost:3000";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      user: {}
    }
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
        console.log(this.state.authenticated);
        console.log(this.state.user);

      },
      (error) => {
        console.log("error fetching");
      }
    );
  }

  loggedIn = () => {
    this.setState({
      authenticated: true,
      user: this.state.user
    });
  };

  loggedOut = () => {
    this.setState({
      authenticated: false,
      user: null
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  /*setUserProfile = () => {
    const username = "";
    this.setState({
      authenticated: true,
      username: username
    })
  }*/

  /*const [mess, setMess] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState();

  const socketRef = useRef();
  const messagesEnd = useRef();*/

  /*useEffect(() => {
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
  }, []);*/

  /*const sendMessage = () => {
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
  }*/

  

  render () {
    const {authenticated} = this.state;
    //const {user} = this.state.user;
    console.log(this.state.authenticated);
    console.log(this.state.user);
    console.log({authenticated});
    return (
      <div>
        <Navbar authenticated={authenticated} user={this.state.user}/>
        <Main />
        <Footer />
      </div>
    );
  }
}


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