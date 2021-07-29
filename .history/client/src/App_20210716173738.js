import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";


import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Main from "./router/Main"


import "./App.scss";

const host = "http://localhost:3000";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      username: ""
    }
  }

  setUserProfile = () => {
    const username = "";
    this.setState({
      authenticated: true,
      username: username
    })
  }

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
    return (
      <div>
        <Navbar />
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